export function fcfs(processList) {
    // Sort processes based on arrival time
    processList.sort((a, b) => Number(a.arrivalTime) - Number(b.arrivalTime)); // Ensure arrivalTime is a number
  
    let currentTime = 0; // Tracks the current time
    const result = [];
  
    for (const process of processList) {
      // Convert burstTime and arrivalTime to numbers
      const burstTime = Number(process.burstTime);
      const arrivalTime = Number(process.arrivalTime);
  
      // Calculate the completion time
      const completionTime = currentTime + burstTime; // Ensure addition is done with numbers
  
      // Calculate waiting time
      const waitingTime =  Math. abs(currentTime - arrivalTime);
  
      // Calculate turnaround time
      const turnaroundTime = completionTime - arrivalTime;
  
      // Add results for the current process
      result.push({
        processName: process.processName,
        arrivalTime: arrivalTime,
        burstTime: burstTime,
        completionTime: completionTime,
        waitingTime: waitingTime,
        turnAroundTime: turnaroundTime,
      });
  
      // Update current time
      currentTime = completionTime;
    }
  
    return result; // Return the results array
  }
  

export function sjf(processList) {
  // Sort processes based on burst time
  processList.sort((a, b) => Number(a.burstTime) - Number(b.burstTime));

  let currentTime = 0; // Tracks the current time
  const result = [];

  for (const process of processList) {
    // Check if the process has arrived before the current time
    if (process.arrivalTime > currentTime) {
      currentTime = Number(process.arrivalTime); // Move current time forward if the process hasn't arrived yet
    }

    // Calculate the completion time
    const completionTime = currentTime + process.burstTime;

    // Calculate waiting time
    const waitingTime = currentTime - process.arrivalTime;

    // Calculate turnaround time
    const turnaroundTime = completionTime - process.arrivalTime;

    // Add results for the current process
    result.push({
        processName: process.processName,
        arrivalTime: arrivalTime,
        burstTime: burstTime,
        completionTime: completionTime,
        waitingTime: waitingTime,
        turnAroundTime: turnaroundTime,
      });

    // Update current time
    currentTime = completionTime;
  }

  return result; // Return the results array
}