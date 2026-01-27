// Topic of the Day: Parallel Promises (Promise.all)

// Explanation: If you need to fetch data from 3 different APIs, don't wait for them one by one. 
// 
// Promise.all runs them all at the same time (in parallel) and waits until everyone is finished.

const fetchUser = () => new Promise(resolve => setTimeout(() => resolve("User Data"), 1000));
const fetchPosts = () => new Promise(resolve => setTimeout(() => resolve("User Posts"), 1000));
const fetchFriends = () => new Promise(resolve => setTimeout(() => resolve("User Friends"), 1000));

async function loadProfile() {
    console.time("Loading");

    // 1. Serial (Slow - takes 3 seconds total)
    // await fetchUser();
    // await fetchPosts();
    // await fetchFriends();

    // 2. Parallel (Fast - takes 1 second total)
    const results = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchFriends()
    ]);

    console.log(results); // ["User Data", "User Posts", "User Friends"]
    console.timeEnd("Loading");
}

loadProfile();