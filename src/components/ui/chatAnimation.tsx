import React, { useEffect, useState } from 'react';

function ChatAnimation({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-lg inline-block max-w-full break-words relative">
        <p className="m-0 font-sans leading-relaxed">
          {displayedText}
          {index < text.length && (
            <span className="animate-blink text-xl ml-1">|</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default ChatAnimation;
