import moment from 'moment-timezone';

const order = [
  {
    mandatory: false,
    name: 'years'
  },
  {
    mandatory: false,
    name: 'months'
  },
  {
    mandatory: false,
    name: 'days'
  },
  {
    mandatory: true,
    name: 'hours'
  },
  {
    mandatory: true,
    name: 'minutes'
  },
  {
    mandatory: true,
    name: 'seconds'
  }
];

export const downloadFile = (value, fileName) => {
  const element = document.createElement('a');
  const file = new Blob([value], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
};
export const toDate = (ms) => {
  const diff = {
    years: moment.duration(ms, 'ms').years(),
    months: moment.duration(ms, 'ms').months(),
    days: moment.duration(ms, 'ms').days(),
    hours: moment.duration(ms, 'ms').hours(),
    minutes: moment.duration(ms, 'ms').minutes(),
    seconds: moment.duration(ms, 'ms').seconds()
  };
  order.every(({ name, mandatory }) => {
    if (mandatory) return true;
    if (diff[name] === 0) {
      diff[name] = undefined;
      return true;
    }
    return false;
  });
  return diff;
};
