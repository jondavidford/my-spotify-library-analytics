import { ConcatArtistsPipe } from './concat-artists.pipe';

describe('ConcatArtistsPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatArtistsPipe();
    expect(pipe).toBeTruthy();
  });
});
