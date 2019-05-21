import app from './app';

app.listen(app.get('port'), () => {
  console.info(`app is running on port ${app.get('port')}`);
});
