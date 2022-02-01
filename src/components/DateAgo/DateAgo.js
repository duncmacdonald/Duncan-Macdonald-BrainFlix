
export default function (timestamp) {
    const now = new Date();
    let past = new Date(timestamp);
    const delta = now.valueOf() - past.valueOf();
    let timeMessage = "";
    let date = String(past.getDate());
    let month = String(past.getMonth() + 1);
    let year = String(past.getFullYear());


    //Add as many user friendly message states as desired
    //60000 milliseconds is a minute, 86400000 is 24 hours
    //the order the comments appear is not determined here and displayed message is only accurate enough to make humans happy
    if (delta < 60000) {
      timeMessage = "moments ago";
    } else if (delta < 86400000 && now.getDate() === past.getDate()) {
      timeMessage = "today";
    } else if (delta < 32 * 86400000) {
      //it's the same function with a different denominator if you want to do weeks, months, years, etc...
      timeMessage =
        Math.floor((now.valueOf() - past.valueOf()) / 86400000) +
        " days ago";
    } else if (delta < 365 * 86400000) {
      //30 days is an approximate month
      timeMessage =
        Math.floor((now.valueOf() - past.valueOf()) / (30 * 86400000)) +
        " months ago";
    } else {
      //leaving the possibility for some comments with the styling from the mockup
      timeMessage = month + "/" + date + "/" + year;
    }

    return timeMessage;
}
