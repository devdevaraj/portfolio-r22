import React, { useRef, useEffect } from 'react'
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'

export function AboutTerminal() {
 const terminalRef = useRef<HTMLDivElement>(null);

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

  const handleResize = () => {
   fitAddon.fit();
  };
  window.addEventListener('resize', handleResize);

  let isMounted = true;

  const runSequence = async () => {
   term.write('\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
   await new Promise(r => setTimeout(r, 500));
   if (!isMounted) return;

   const command = `cat profile.txt`;
   term.write('\x1b[1;36m');

   for (let i = 0; i < command.length; i++) {
    if (!isMounted) return;
    term.write(command[i]);
    await new Promise(r => setTimeout(r, 80));
   }

   if (!isMounted) return;
   term.write('\x1b[0m\r\n\r\n');

   try {
    const response = await fetch('/me/me-ascii.txt');
    const text = await response.text();
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
     if (!isMounted) return;
     term.write(lines[i] + '\r\n');
     await new Promise(r => setTimeout(r, 20));
    }
   } catch (e) {
    term.write('Error loading profile...\r\n');
   }

   // term.write('\r\n\x1b[1;32muser@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
  };

  runSequence();

  return () => {
   isMounted = false;
   window.removeEventListener('resize', handleResize);
   term.dispose();
  };
 }, []);

 return (
  <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
   <div
    ref={terminalRef}
    style={{
     position: 'absolute',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
     padding: '0px',
     background: 'transparent',
     border: 'none'
    }}
   >
    <style>{`
     .xterm, .xterm-viewport, .xterm-screen { background-color: transparent !important; }
     .xterm canvas { background-color: transparent !important; }
    `}</style>
   </div>
  </div>
 );
}
