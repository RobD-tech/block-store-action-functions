import massMutate from '../../../functions/mass-mutate/1.0';

describe('Mass mutate', () => {
  test('It only intercepts GQL insert (single) mutations and ', async () => {
    const bulkCreateArticle = vi.fn();
    const bulkCreateComment = vi.fn();

    global.gql.buffer = async (_input, fn) => {
      fn([
        {
          createArticle: bulkCreateArticle,
          createComment: bulkCreateComment,
        },
      ]);
    };

    await massMutate({}, async () => {});

    expect(bulkCreateArticle).toHaveBeenCalled();
    expect(bulkCreateComment).toHaveBeenCalled();
  });
});
