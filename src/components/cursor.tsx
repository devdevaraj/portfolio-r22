"use client"
import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => {
        let delay = 6,
            revisedMousePosX = 0,
            revisedMousePosY = 0;
        let mousePosX = 0,
            mousePosY = 0,
            mouseCircle = document.getElementById('mouse-circle')!;
        document.onmousemove = (e) => {
            mousePosX = e.clientX;
            mousePosY = e.clientY;
            revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
            revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
            // mouseCircle.style.top = mousePosY + 'px';
            // mouseCircle.style.left = mousePosX + 'px';

            console.log(mousePosX, mousePosY);
        }

        function delayMouseFollow() {
            requestAnimationFrame(delayMouseFollow);
            //     revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
            //     revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
            mouseCircle.style.top = revisedMousePosY + 'px';
            mouseCircle.style.left = revisedMousePosX + 'px';
        }
        requestAnimationFrame(delayMouseFollow);
    }, []);
    return (
        <div
            id="mouse-circle"
            className="fixed z-50 size-16 border-4 rounded-full animate-pulse duration-00">
        </div>
    );
}