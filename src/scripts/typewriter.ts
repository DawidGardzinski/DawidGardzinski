interface Typewriter {
  (
    elementToAnimate: HTMLElement | null,
    textsToWrite: string[],
    options?: {
      forwardDelay?: number;
      backwardDelay?: number;
      transitionalDelay?: number;
      leaveLastWord?: boolean;
    }
  ): void;
}

export const typewriter: Typewriter = (
  elementToAnimate,
  textsToWrite,
  options = {}
) => {
  const defaultOptions = {
    forwardDelay: 100,
    backwardDelay: 75,
    transitionalDelay: 200,
    leaveLastWord: true,
  };

  const newOptions: Required<Parameters<Typewriter>[2]> = {
    ...defaultOptions,
    ...options,
  };

  const { forwardDelay, backwardDelay, transitionalDelay, leaveLastWord } =
    newOptions;
  if (!elementToAnimate) return;
  elementToAnimate.innerText = "";

  (function write(words: string[]) {
    if (!words.length) return;
    let wasWritten = false;
    let isLastWord = words.length === 1;
    let writtedWord = "";

    (function writeWord(word: string) {
      setTimeout(
        () => {
          if (!word && !wasWritten) {
            wasWritten = true;
            if (leaveLastWord && isLastWord) return;
            writeWord(writtedWord);
            return;
          }

          if (!wasWritten) {
            writtedWord += word[0];
            elementToAnimate.innerText = writtedWord;
            writeWord(word.slice(1));
            return;
          }

          elementToAnimate.innerText = word;

          if (!word && wasWritten) {
            write(words.slice(1));
            return;
          }

          writeWord(word.slice(0, -1));
        },
        wasWritten ? backwardDelay : word ? forwardDelay : transitionalDelay
      );
    })(words[0]);
  })(textsToWrite);
};
