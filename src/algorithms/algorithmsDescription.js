export const algorithmDescription = [
  {
    name: "FCFS",
    description:
      "FCFS is the simplest scheduling algorithm that schedules processes in the order they arrive in the ready queue. Once a process starts executing, it runs to completion. Although easy to implement, it can lead to the convoy effect, where short processes wait for a long process to finish, resulting in higher average waiting time.",
  },
  {
    name: "SJF",
    description:
      "SJF schedules processes based on the length of their next CPU burst, selecting the process with the smallest burst time next. This algorithm minimizes average waiting time, but it can lead to starvation for longer processes. It requires knowledge of future burst times, making it less practical for certain environments.",
  },
  {
    name: "LJF",
    description:
      "LJF, or Longest Job First, selects the process with the longest estimated time remaining for execution next. While it can minimize the waiting time of longer jobs, it is generally inefficient as it can lead to starvation of shorter processes and increased overall turnaround time.",
  },
  {
    name: "Round Robin",
    description:
      "Round Robin (RR) is a pre-emptive scheduling algorithm where each process is assigned a fixed time slice or quantum. When a process exceeds its time slice, it is moved to the back of the ready queue. This method is fair and responsive, making it ideal for time-sharing systems, though it can lead to high average waiting time if the time slice is too large.",
  },
  {
    name: "SRTF",
    description:
      "SRTF is the preemptive version of SJF, where the process with the smallest remaining time is scheduled next. This algorithm minimizes average waiting time but can cause starvation for longer processes. It requires frequent context switching, which can lead to overhead.",
  },
  {
    name: "LRTF",
    description:
      "LRTF schedules the process with the longest remaining time next, similar to LJF. While it can improve turnaround time for longer jobs, it typically results in increased waiting times for shorter jobs, potentially leading to starvation. LRTF is less commonly used due to its inefficiency.",
  },
  {
    name: "HRRN",
    description:
      "HRRN calculates the response ratio for each process, which is the sum of its waiting time and its burst time divided by its burst time. The process with the highest response ratio is selected next. This algorithm balances the benefits of SJF and fairness, effectively reducing starvation while optimizing turnaround time.",
  },
];
