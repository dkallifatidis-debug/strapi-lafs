module.exports = () => {
  return async (ctx, next) => {
    await next();

    if (ctx.path.startsWith('/admin')) {
      ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      ctx.set('Pragma', 'no-cache');
      ctx.set('Expires', '0');
    }
  };
};
