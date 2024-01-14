import config from 'config';

export default function() {
  if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not provided.');
    process.exit(1);
  }
}