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
  return result; // Return the results array
}

const processes = [
  {
    processName: "Process 1",
    arrivalTime: "0",
    burstTime: "2",
  },
  {
    processName: "Process 2",
    arrivalTime: "1",
    burstTime: "3",
  },
  {
    processName: "Process 3",
    arrivalTime: "2",
    burstTime: "4",
  },
  {
    processName: "Process 4",
    arrivalTime: "3",
    burstTime: "1",
  },
  {
    processName: "Process 5",
    arrivalTime: "4",
    burstTime: "5",
  },
];

roundRobin(processes, 2);

function roundRobin(processList, timeQuantum) {
  processList.sort((a, b) => Number(a.arrivalTime) - Number(b.arrivalTime));
  let result = [];
  let remainingProcesses = roundRobinHelper(processList, timeQuantum);
  while (remainingProcesses.length > 0) {
    remainingProcesses = roundRobinHelper(remainingProcesses, timeQuantum);
  }
  console.log(remainingProcesses);
}
function roundRobinHelper(currentList, timeQuantum) {
  // This is the time when the cpu begins to work on this process
  let startTime = Number(currentList[0].arrivalTime);
  const result = [];

  for (let i = 0; i < currentList.length; i++) {
    const process = currentList[i];

    // Convert burstTime and arrivalTime to numbers
    const burstTime = Number(process.burstTime);

    // Ensure that the arrival time for the first process is 0
    const arrivalTime = Number(process.arrivalTime);

    //Calculate end time
    const endTime = startTime + timeQuantum;

    //Remaining time
    const remainingTime = burstTime - timeQuantum;

    // Add results for the current process
    result.push({
      processName: process.processName,
      arrivalTime: arrivalTime,
      burstTime: burstTime,
      startTime: startTime,
      endTime: endTime,
      remainingTime: remainingTime,
    });
    startTime = endTime;
  }
  return result; // Return the results array
}
