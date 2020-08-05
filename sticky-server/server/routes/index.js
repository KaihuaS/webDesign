import StickyRouter from './sticky-route';

export default (app) => {
  //set routes
  app.use('/', StickyRouter);
}