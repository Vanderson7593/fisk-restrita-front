import { formatQuery } from '../services-helpers';

const makeSut = () => formatQuery;

const testCases: any[][] = [
  [{}, ''],
  [{ term: '' }, 'term='],
  [{ term: '', speaker: '' }, 'term=&speaker='],
  [{ term: 123, speaker: '' }, 'term=123&speaker='],
  [{ term: '', speaker: 123 }, 'term=&speaker=123'],
  [{ term: 123, speaker: 123 }, 'term=123&speaker=123'],
  [{ term: 'pele' }, 'term=pele'],
  [
    {
      page: 1,
      type: 'video',
    },
    'page=1&type=video',
  ],
  [{ term: 'pele', speaker: 'Vander' }, 'term=pele&speaker=Vander'],
];

describe(makeSut().name, () => {
  it.each(testCases)('given an object %p, it returns %p', (test, result) => {
    const sut = makeSut();

    expect(sut(test)).toEqual(result);
  });
});
