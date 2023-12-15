import getWordCount from '../functions/getWordCount';

test(' Checking the number of words in the text ', () => {
    expect(getWordCount('Lorem ipsum dolor ,sit amet , sit amet ', 'sit')).toBe(2);
    expect(getWordCount('Lorem ipsum dolor sit amet', 'ruble')).toBe(0);
    expect(getWordCount('Lorem ip%sum dolor sit amet', 'ipsum')).toBe(0);
    expect(getWordCount('Lorem ipsum dolor sit siT amet Sit SIT', 'sit')).toBe(2);

});
