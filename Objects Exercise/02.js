function solve(worker) {
    if(worker.dizziness) {
        worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }
 return worker;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );
console.log('--------------');
solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  );
console.log('--------------');
solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );