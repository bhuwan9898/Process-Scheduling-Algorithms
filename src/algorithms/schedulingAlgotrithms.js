// schedulingAlgorithms.js

export function fcfs(processList) {
  // Sort processes based on arrival time
  processList.sort((a, b) => a.arrivalTime - b.arrivalTime);

  let currentTime = 0; // Tracks the current time
  const result = [];

  for (const process of processList) {
    // Calculate the completion time
    const completionTime = currentTime + process.burstTime;

    // Calculate waiting time
    const waitingTime = currentTime - process.arrivalTime;

    // Calculate turnaround time
    const turnaroundTime = completionTime - process.arrivalTime;

    // Add results for the current process
    result.push({
      processName: process.processName,
      arrivalTime: process.arrivalTime,
      burstTime: process.burstTime,
      completionTime,
      waitingTime,
      turnaroundTime,
    });

    // Update current time
    currentTime = completionTime;
  }

  return result; // Return the results array
}
// schedulingAlgorithms.js

export function stf(processList) {
  // Sort processes based on burst time
  processList.sort((a, b) => a.burstTime - b.burstTime);

  let currentTime = 0; // Tracks the current time
  const result = [];

  for (const process of processList) {
    // Check if the process has arrived before the current time
    if (process.arrivalTime > currentTime) {
      currentTime = process.arrivalTime; // Move current time forward if the process hasn't arrived yet
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
      arrivalTime: process.arrivalTime,
      burstTime: process.burstTime,
      completionTime,
      waitingTime,
      turnaroundTime,
    });

    // Update current time
    currentTime = completionTime;
  }

  return result; // Return the results array
}
