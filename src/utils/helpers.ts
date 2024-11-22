
function getCurrentTime(): string {
    const now: Date = new Date(); 
    const hours: string = String(now.getHours()).padStart(2, '0'); 
    const minutes: string = String(now.getMinutes()).padStart(2, '0'); 
    const seconds: string = String(now.getSeconds()).padStart(2, '0'); 
  
    return `${hours}:${minutes}:${seconds}`; 
}

function getCurrentDay(): string {
    const daysOfWeek: string[] = [
      'неділя', 'понедiлок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'
    ];
    const months: string[] = [
      'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 
      'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
  
    const now = new Date();
    const day = now.getDate(); 
    const month = now.getMonth(); 
    const dayOfWeek = now.getDay(); 
  
    return `${day} ${months[month]} ${daysOfWeek[dayOfWeek]}`;
}

function getDevicesAmmount(devices: DeviceData[]): number {
  let counter = 0;
  devices.forEach(item => {
    counter += item.value;
  });
  return counter;
}


export {getCurrentTime, getCurrentDay, getDevicesAmmount};