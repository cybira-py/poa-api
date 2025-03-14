import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import poaRoutes from './routes/poaRoutes.js';
import objectiveRoutes from './routes/objectiveRoutes.js';
import actionRoutes from './routes/actionRoutes.js';
import indicatorRoutes from './routes/indicatorRoutes.js';
import indicatorMetadataRoutes from './routes/indicatorMetadataRoutes.js';
import indicatorDataRoutes from './routes/indicatorDataRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/poa', poaRoutes);
app.use('/objectives', objectiveRoutes);
app.use('/actions', actionRoutes);
app.use('/indicators', indicatorRoutes);
app.use('/indicator-metadata', indicatorMetadataRoutes);
app.use('/indicator-data', indicatorDataRoutes);
app.use('/branches', branchRoutes);
app.use('/units', unitRoutes);


// Autenticación a la base de datos
db.sequelize.authenticate()
  .then(async () => {
    console.log('✅ DB Connected');
    // 👉 Crear SCHEMA si no existe
    await db.sequelize.getQueryInterface().createSchema(process.env.SCHEMA).catch(err => {
      if (err.original.code !== '42P06') { // 42P06 = schema already exists
        console.error('❌ Error creating schema:', err);
      }
    });
    return db.sequelize.sync();
  })
  .then(() => {
    const keyPath = process.env.SSL_KEY_PATH;
    const certPath = process.env.SSL_CERT_PATH;

    if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
      // HTTPS mode
      const sslOptions = {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath)
      };

      https.createServer(sslOptions, app).listen(port, host, () => {
        console.log(`🔐 HTTPS Server running at https://${host}:${port}`);
      });

    } else {
      // HTTP fallback
      http.createServer(app).listen(port, host, () => {
        console.log(`🌐 HTTP Server running at http://${host}:${port}`);
      });
    }

  })
  .catch(err => console.error('❌ DB connection error:', err));