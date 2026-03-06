require('tsx/cjs');

const { execSync } = require('node:child_process');

const run = (command) => {
    execSync(command, {
        stdio: 'inherit',
        env: process.env,
    });
};

try {
    run('npx prisma db push');
    run('npx tsx prisma/seed.ts');
} catch (error) {
    console.error('Startup initialization failed:', error);
    process.exit(1);
}

require('./server/index.ts');
