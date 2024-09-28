export function fcfs(processList) {
  // Sort processes based on arrival time
  processList.sort((a, b) => Number(a.arrivalTime) - Number(b.arrivalTime));

  // This is the time when the cpu begins to work on this process
  let startTime = Number(processList[0].arrivalTime);
  const result = [];

  for (let i = 0; i < processList.length; i++) {
    const process = processList[i];

    // Convert burstTime and arrivalTime to numbers
    const burstTime = Number(process.burstTime);

    // Ensure that the arrival time for the first process is 0
    const arrivalTime = Number(process.arrivalTime);

    // Calculate waiting time
    const waitingTime = i === 0 ? 0 : Math.abs(arrivalTime - startTime);

    // Time between the process entered the cpu and left
    const turnAroundTime = waitingTime + burstTime;

    //Calculate end time
    const endTime = startTime + burstTime;

    // Add results for the current process
    result.push({
      processName: process.processName,
      arrivalTime: arrivalTime,
      burstTime: burstTime,
      startTime: startTime,
      endTime: endTime,
      waitingTime: waitingTime,
      turnAroundTime: turnAroundTime,
    });
    startTime = endTime;
  }
  return result; // Return the results array
}

export function sjf(processList) {
  // Sort processes based on burst time (convert to numbers for sorting)
  processList.sort((a, b) => Number(a.burstTime) - Number(b.burstTime));

  let startTime = Number(processList[0].arrivalTime);
  const result = [];

  for (let i = 0; i < processList.length; i++) {
    const process = processList[i];

    // Convert burstTime and arrivalTime to numbers
    const burstTime = Number(process.burstTime);

    // Ensure that the arrival time for the first process is 0
    const arrivalTime = Number(process.arrivalTime);

    // Calculate waiting time
    const waitingTime = i === 0 ? 0 : Math.abs(arrivalTime - startTime);

    // Time between the process entered the cpu and left
    const turnAroundTime = waitingTime + burstTime;

    //Calculate end time
    const endTime = startTime + burstTime;

    // Add results for the current process
    result.push({
      processName: process.processName,
      arrivalTime: arrivalTime,
      burstTime: burstTime,
      startTime: startTime,
      endTime: endTime,
      waitingTime: waitingTime,
      turnAroundTime: turnAroundTime,
    });
    startTime = endTime;
  }
  return result; // Return the results array
}

export function ljf(processList) {
  // Sort processes based on burst time (convert to numbers for sorting)
  processList.sort((a, b) => Number(b.burstTime) - Number(a.burstTime));

  let startTime = Number(processList[0].arrivalTime);
  const result = [];

  for (let i = 0; i < processList.length; i++) {
    const process = processList[i];

    // Convert burstTime and arrivalTime to numbers
    const burstTime = Number(process.burstTime);

    // Ensure that the arrival time for the first process is 0
    const arrivalTime = Number(process.arrivalTime);

    // Calculate waiting time
    const waitingTime = i === 0 ? 0 : Math.abs(arrivalTime - startTime);

    // Time between the process entered the cpu and left
    const turnAroundTime = waitingTime + burstTime;

    //Calculate end time
    const endTime = startTime + burstTime;

    // Add results for the current process
    result.push({
      processName: process.processName,
      arrivalTime: arrivalTime,
      burstTime: burstTime,
      startTime: startTime,
      endTime: endTime,
      waitingTime: waitingTime,
      turnAroundTime: turnAroundTime,
    });
    startTime = endTime;
  }
  return result;
} // Return the results array

export function roundRobin(processList, timeQuantum) {
  // Sort processes by arrival time
  processList.sort((a, b) => Number(a.arrivalTime) - Number(b.arrivalTime));

  let totalTime = 0; // Track overall time
  const queue = processList.map((process) => ({
    ...process,
    remainingTime: Number(process.burstTime), // Track remaining burst time
    startTime: null,
    endTime: null,
  }));
  let startTime = Number(processList[0].arrivalTime);
  const result = [];

  while (queue.length > 0) {
    let process = queue.shift();
    // Time spent on this process in this round
    let timeSpent =
      process.remainingTime >= timeQuantum
        ? timeQuantum
        : process.remainingTime;
    console.log("Time Spent:", timeSpent);
    // Update total time and process's remaining time
    totalTime += timeSpent;
    process.remainingTime -= timeSpent;
    console.log("Total Time:", totalTime);
    // Set end time for this process in this round
    const endTime = startTime + timeSpent;
    const turnAroundTime = totalTime + timeSpent;

    // Add to result log
    result.push({
      processName: process.processName,
      arrivalTime: process.arrivalTime,
      burstTime: Number(process.burstTime),
      startTime: startTime,
      endTime: endTime,
      remainingTime: process.remainingTime,
      waitingTime: totalTime,
      turnAroundTime: turnAroundTime,
    });
    startTime = endTime;
    // If the process still has time left, push it back to the queue
    if (process.remainingTime > 0) {
      queue.push(process);
    }
  }
  console.log(result);
  return result;
}
