import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'

export interface TerminalController {
 startSequence: () => void;
 clearSequence: () => void;
}

function wrapText(text: string, maxLineLength: number) {
 const words = text.split(' ');
 let currentLine = words[0] || '';
 const lines = [];

 for (let i = 1; i < words.length; i++) {
  if (currentLine.length + words[i].length + 1 <= maxLineLength) {
   currentLine += ' ' + words[i];
  } else {
   lines.push(currentLine);
   currentLine = words[i];
  }
 }
 if (currentLine) lines.push(currentLine);
 return lines;
}

export const XTermTerminal = forwardRef<TerminalController, { title: string; desc: string; isFirst?: boolean; style?: React.CSSProperties }>(({ title, desc, isFirst, style }, ref) => {
 const terminalRef = useRef<HTMLDivElement>(null);
 const termRef = useRef<Terminal | null>(null);
 const seqRef = useRef(0);

 useEffect(() => {
  if (!terminalRef.current) return;

  const term = new Terminal({
   allowTransparency: true,
   theme: {
    background: '#00000000',
    foreground: '#cceeff',
   },
   fontSize: 16,
   fontFamily: '"Google Sans", monospace',
   cursorBlink: true,
  });

  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);

  term.open(terminalRef.current);
  fitAddon.fit();

  if (isFirst) {
   term.write('\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
   const command = `cat ${title.toLowerCase().replace(/ /g, '_')}.txt`;
   term.write(`\x1b[1;36m${command}\x1b[0m\r\n\r\n`);
   const lines = wrapText(desc, 60);
   for (let i = 0; i < lines.length; i++) {
    term.write(`${lines[i]}\r\n`);
   }
   term.write('\r\n\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
  } else {
   term.write('\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
  }

  termRef.current = term;

  return () => {
   term.dispose();
   termRef.current = null;
  };
 }, []);

 useImperativeHandle(ref, () => ({
  startSequence: () => {
   seqRef.current++;
   const currentSeq = seqRef.current;
   const term = termRef.current;
   if (!term) return;

   term.write('\x1b[2J\x1b[3J\x1b[H');
   term.write('\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');

   const typeText = async (text: string, delay: number = 80) => {
    for (let i = 0; i < text.length; i++) {
     if (seqRef.current !== currentSeq) return false;
     term.write(text[i]);
     await new Promise(r => setTimeout(r, delay));
    }
    return true;
   };

   const run = async () => {
    await new Promise(r => setTimeout(r, 500));

    if (seqRef.current !== currentSeq) return;
    const command = `cat ${title.toLowerCase().replace(/ /g, '_')}.txt`;
    term.write('\x1b[1;36m');
    if (!await typeText(command, 10)) return;
    term.write('\x1b[0m\r\n\r\n');

    const lines = wrapText(desc, 60);
    for (let i = 0; i < lines.length; i++) {
     if (!await typeText(lines[i], 10)) return;
     if (seqRef.current !== currentSeq) return;
     term.write('\r\n');
    }

    term.write('\r\n\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
   };

   run();
  },
  clearSequence: () => {
   seqRef.current++;
   const currentSeq = seqRef.current;
   const term = termRef.current;
   if (!term) return;

   const clear = async () => {
    term.write('clear\r\n');
    await new Promise(r => setTimeout(r, 200));
    if (seqRef.current !== currentSeq) return;
    term.write('\x1b[2J\x1b[3J\x1b[H');
    term.write('\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
   };

   clear();
  }
 }), [title, desc]);

 return (
  <div
   ref={terminalRef}
   style={{
    width: '690px',
    height: '400px',
    padding: '0px',
    background: 'transparent',
    border: '0px solid #004488',
    ...style
   }}
  >
   <style>{`
    .xterm, .xterm-viewport, .xterm-screen { background-color: transparent !important; }
    .xterm canvas { background-color: transparent !important; }
   `}</style>
  </div>
 );
});
