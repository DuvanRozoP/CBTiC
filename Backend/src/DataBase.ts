import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

mongoose.Promise = global.Promise;

interface CustomConnectOptions extends mongoose.ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

async function conexion(uri: string) {
  const options: CustomConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  await mongoose.connect(uri, options);
  console.log('connect in mongodb');
}

export default conexion;
