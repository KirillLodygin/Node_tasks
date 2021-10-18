const date = require('date-and-time');
const fs = require('fs');

async function actualCallAnswer() {
  let response = await new Promise(resolve => {
    fs.readFile('last_call.txt', 'utf8', (error, data) => {
      if (error) throw error;
      resolve(data);
    });
  });

  if (!response) {
    fs.writeFile(
      'last_call.txt',
      date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
      error => {
        if (error) throw error;
        console.log('Окей, ты меня запустил. Ты доволен?');
      },
    );
  } else {
    const actualCall = new Date();
    const lastCall = date.parse(response, 'YYYY/MM/DD HH:mm:ss');

    const days = Math.floor(date.subtract(actualCall, lastCall).toDays() % 24);
    const hours = Math.floor(
      date.subtract(actualCall, lastCall).toHours() % 60,
    );
    const minutes = Math.floor(
      date.subtract(actualCall, lastCall).toMinutes() % 60,
    );
    const seconds = Math.floor(
      date.subtract(actualCall, lastCall).toSeconds() % 60,
    );

    let message = 'Ну ты же уже запускал меня ';

    if (days > 0) message = `${message}${days} days `;
    if (hours > 0) message = `${message}${hours} hours `;
    if (minutes > 0) message = `${message}${minutes} minutes `;
    if (seconds > 0) message = `${message}${seconds} seconds `;

    message = `${message} назад.`;

    fs.writeFileSync(
      'last_call.txt',
      date.format(new Date(), 'YYYY/MM/DD HH:mm:ss'),
    );

    console.log(message);
  }
}

actualCallAnswer();
