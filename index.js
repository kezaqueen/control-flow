//Question 1
const deliveries = (days) => {
    days.forEach(day => {
        switch (day) {
            case "Monday":
                console.log(`On ${day} we deliver kisumu oil`)
                break;
            case "Tuesday":
                console.log(`on ${day} we deliver vegetables`)
                break;
            case "Thursday":
                console.log(`on ${day} we deliver cereals`)
                break;
            case "Friday":
                console.log(`on ${day} we deliver fruits`)
                break;
            default:
                console.log("No deliveries")
                break;
        }
    });
}
const days = ["Monday", "Tuesday", "Thursday", "Friday"]
deliveries(days);
//Question 2
const checkStatus = (books) => {
    books.forEach(book => {
        switch (book) {
            case "Available":
                console.log("Ready to lend")
                break;
            case "Borrowed":
                console.log("Checked out")
                break;
            default:
                console.log("Book not available")
                break;
        }
    })
}
const books = ["Available", "Borrowed", "Book not available"]
checkStatus(books);
//Question3
const checkCustomerAges = (ages) => {
    ages.forEach(age => {
        if (age >= 18) {
            console.log("Adult")
        }
        else {
            console.log("Minor")
        }
    });
}
const ages = [12, 18, 15, 19, 20]
checkCustomerAges(ages);
//Question 4
const liveCountDown = () => {
    let lives = 5;
    while (lives >= 0) {
        console.log(`live count down ${lives}`)
        lives--
    }

};
liveCountDown();
//Question5
const printFeedbacks= (feedbacks) => {
    feedbacks.forEach(feedback=>{
        do {
            console.log(`Print user feedback ${feedback}`)
        } while (feedback<feedbacks.length)
    
    })
}
const feedbacks=["I am satsfied","My login page is not working","I am happy"]
printFeedbacks(feedbacks)
//Question 6
const loginStatuses = (statuses) => {
    statuses.forEach(stat => {
        if (stat == "logged in") {
            console.log("Welcome back")
        }
        else {
            console.log("Please login")
        }
    })
}
const statuses = ["logged in", "not logged in"]
loginStatuses(statuses)
//Question 7
const supportTicket = (priorities) => {
    priorities.forEach(priority => {
        switch (priority) {
            case "High":
                console.log(`If priority is ${priority} address immediately`)
                break;
            case "Medium":
                console.log(`If priority is ${priority} address balancely`)
                break;
            case "Low":
                console.log(`If priority is ${priority} address after the high priorities`)
                break;
            default:
                console.log("No action taken")
                break;
        }
    });
}
const priorities = ["High", "Medium", "Low"]
supportTicket(priorities)

//Question 8
const quizCountDown = () => {
    let quiz = 10;
    while (quiz >= 0) {
        console.log(`Quiz countdown ${quiz}`)
        quiz--
    }
}
quizCountDown()