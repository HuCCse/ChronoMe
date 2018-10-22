# ChronoMe

ChronoMe is used to time the time in your code, so as to understand how long it takes to run.

```javascript
ChronoMe.start('all_the_script'); // Start chrono named "all_the_script"

ChronoMe.start('my_chrono'); // Start chrono named "my_chrono"

/*
 * 
 * Do something...
 * 
*/

ChronoMe.stop('my_chrono'); // Stop chrono named "my_chrono"

/*
 * 
 * Do something else... :-)
 * 
*/ 

ChronoMe.stop('all_the_script');  // Stop chrono named "all_the_script"

// Show in the console all chronos
ChronoMe.getAllChronos();

```
