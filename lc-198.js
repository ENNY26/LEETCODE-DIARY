var rob = function (nums) {

    let prev1 = 0
    let prev2 = 0

    for (let num of nums) {
        if (num < 0) return 0

        let take = prev2 + num
        let skip = prev1
        let curr = Math.max(take, skip);

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}
