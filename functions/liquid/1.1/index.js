import groupBy from 'lodash.groupby';
import Liquid from '../../utils/liquid.min';

const liquid = async ({ template, templateVariable, context = [] }) => {
  const engine = new Liquid();

  engine.registerFilter('group', (collection, key) => groupBy(collection, key));

  const as = engine.parseAndRenderSync(
    templateVariable || template || '',
    context.reduce((ctx, { key, value }) => {
      ctx[key] = value;
      return ctx;
    }, {}),
  );

  return {
    as,
  };
};

export default liquid;
