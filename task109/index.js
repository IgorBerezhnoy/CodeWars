const match = (candidate, job) => {
    if (candidate.minSalary && job.maxSalary) {
        return candidate.minSalary*0.9 <= job.maxSalary;
    } else {
        throw new Error('Error');
    }
};