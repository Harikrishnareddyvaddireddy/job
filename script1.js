
    // Sample job data
    const jobData = [
    {
        role: "Java Developer",
        jobType: "Temporary",
        pay: {
            currency: "AED",
            min: 202.00,
            max: 300.00,
            hourly: true
        },
        location: "Dubai",
        description: "Java Developer: Collaborate on software solutions, enhance Financial Advisor Funnel, and contribute to backend APIs in a remote 100% contract role. EST working hours.",
        date: "12/11/2023"
    },
    {
        role: "Javascript Developer",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "Javascript Developer: Collaborate on software solutions, enhance Financial Advisor Funnel, and contribute to backend APIs in a remote 100% contract role. EST working hours.",
        date: "1/12/2023"
    },
    {
        role: "Frontend Developer",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "Frontend Developer: Collaborate on software solutions, enhance user interfaces, and contribute to frontend development in a remote 100% contract role. EST working hours.",
        date: "12/02/2023"
    },
    {
        role: "React.js Backend Developer",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "React.js Backend Developer: Collaborate on software solutions, enhance backend systems, and contribute to React.js development in a remote 100% contract role. EST working hours.",
        date: "2/20/2024"
    },
    {
        role: "AWS Customer Support",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "AWS Customer Support: Provide technical assistance to AWS customers, resolve issues, and contribute to customer support operations in a remote 100% contract role. EST working hours.",
        date: "1/02/2024"
    },
    {
        role: "Marketing & Creative",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 110.00,
            max: 180.00,
            hourly: false
        },
        location: "Dubai",
        description: "Marketing & Creative: Develop creative marketing campaigns, design compelling visuals, and contribute to brand promotion. Full-time position in Dubai.",
        date: "1/1/2024"
    },
    {
        role: "Finance & Accounting",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 150.00,
            max: 250.00,
            hourly: false
        },
        location: "Dubai",
        description: "Finance & Accounting: Manage financial accounts, handle budgeting, and ensure compliance with accounting standards. Full-time position in Dubai.",
        date: "1/15/2024"
    },
    {
        role: "Technology",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 120.00,
            max: 180.00,
            hourly: false
        },
        location: "UAE",
        description: "Technology: Work on cutting-edge technology projects, collaborate with cross-functional teams, and contribute to innovation. Full-time position in the UAE.",
        date: "1/05/2024"
    },
    {
        role: "Administrative & Customer Support",
        jobType: "Temporary",
        pay: {
            currency: "AED",
            min: 80.00,
            max: 120.00,
            hourly: true
        },
        location: "UAE",
        description: "Administrative & Customer Support: Provide administrative assistance, handle customer inquiries, and support daily operations. Temporary role in the UAE.",
        date: "1/22/2024"
    },
    {
        role: "Java Developer",
        jobType: "Temporary",
        pay: {
            currency: "AED",
            min: 202.00,
            max: 300.00,
            hourly: true
        },
        location: "Dubai",
        description: "Java Developer: Collaborate on software solutions, enhance Financial Advisor Funnel, and contribute to backend APIs in a remote 100% contract role. EST working hours.",
        date: "1/11/2023"
    },
    {
        role: "Javascript Developer",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "Javascript Developer: Collaborate on software solutions, enhance Financial Advisor Funnel, and contribute to backend APIs in a remote 100% contract role. EST working hours.",
        date: "1/12/2023"
    },
    {
        role: "Frontend Developer",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "Frontend Developer: Collaborate on software solutions, enhance user interfaces, and contribute to frontend development in a remote 100% contract role. EST working hours.",
        date: "1/02/2023"
    },
    {
        role: "React.js Backend Developer",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "React.js Backend Developer: Collaborate on software solutions, enhance backend systems, and contribute to React.js development in a remote 100% contract role. EST working hours.",
        date: "1/20/2024"
    },
    {
        role: "AWS Customer Support",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 102.00,
            max: 200.00,
            hourly: true
        },
        location: "UAE",
        description: "AWS Customer Support: Provide technical assistance to AWS customers, resolve issues, and contribute to customer support operations in a remote 100% contract role. EST working hours.",
        date: "1/02/2024"
    },
    {
        role: "Marketing & Creative",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 110.00,
            max: 180.00,
            hourly: false
        },
        location: "Dubai",
        description: "Marketing & Creative: Develop creative marketing campaigns, design compelling visuals, and contribute to brand promotion. Full-time position in Dubai.",
        date: "1/1/2024"
    },
    {
        role: "Finance & Accounting",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 150.00,
            max: 250.00,
            hourly: false
        },
        location: "Dubai",
        description: "Finance & Accounting: Manage financial accounts, handle budgeting, and ensure compliance with accounting standards. Full-time position in Dubai.",
        date: "1/15/2024"
    },
    {
        role: "Technology",
        jobType: "Permanent",
        pay: {
            currency: "AED",
            min: 120.00,
            max: 180.00,
            hourly: false
        },
        location: "UAE",
        description: "Technology: Work on cutting-edge technology projects, collaborate with cross-functional teams, and contribute to innovation. Full-time position in the UAE.",
        date: "1/05/2024"
    },
    {
        role: "Administrative & Customer Support",
        jobType: "Temporary",
        pay: {
            currency: "AED",
            min: 80.00,
            max: 120.00,
            hourly: true
        },
        location: "UAE",
        description: "Administrative & Customer Support: Provide administrative assistance, handle customer inquiries, and support daily operations. Temporary role in the UAE.",
        date: "1/22/2024"
    }
    ];

    const jobsPerPage = 10;
    let currentPage = 1;

    // Function to create a job box
    function createJobBox(job) {
        const jobBox = document.createElement("div");
        jobBox.className = "job-box";

        const datePosted = formatDate(new Date(job.date));

        jobBox.innerHTML = `
            <h2>${job.role}</h2>
            <p><strong>Job Type: </strong> ${job.jobType}</p>
            <p><strong><i class="fa-solid fa-money-bill"> </i> </strong> ${job.pay.currency} ${job.pay.min} - ${job.pay.max}</p>
            <p><strong><i class="fa-solid fa-globe"> </i> </strong>  ${job.location}</p>
            <p><strong>Description: </strong> ${job.description}</p>
            <p><strong>Date: </strong> ${datePosted}</p>
            <button class="apply-button" style="margin: 10px auto; display: block;" onclick="applyForJob()">Apply</button>
        `;

        document.getElementById("job-container").appendChild(jobBox);
    }
    function applyForJob() {
        // Redirect to the contact page
        window.location.href = "contact.html";
    }
// Function to filter and display jobs based on search criteria, date filter, and pagination
function searchJobs() {
    const jobRoleInput = document.getElementById("jobRoleInput").value.toLowerCase();
    const locationInput = document.getElementById("locationInput").value.toLowerCase();
    const dateFilter = document.getElementById("dateFilter").value;

    // Clear existing job boxes
    document.getElementById("job-container").innerHTML = "";

    // Hide no jobs message
    document.getElementById("no-jobs-message").style.display = "none";

    // Filter jobs based on search criteria and date filter
    let filteredJobs = jobData.filter(job => (
        job.role.toLowerCase().includes(jobRoleInput) &&
        job.location.toLowerCase().includes(locationInput)
    ));

    const now = new Date();
    if (dateFilter === "recent") {
        filteredJobs = filteredJobs.filter(job => now - new Date(job.date) < 604800000); // Jobs posted in the last week (604800000 milliseconds)
    } else if (dateFilter === "long-ago") {
        filteredJobs = filteredJobs.filter(job => now - new Date(job.date) >= 604800000); // Jobs posted more than a week ago
    }

    // Display appropriate message when no jobs match the criteria
    if (filteredJobs.length === 0) {
        document.getElementById("no-jobs-message").style.display = "block";
    } else {
        // Create job boxes for the current page
        const startIndex = (currentPage - 1) * jobsPerPage;
        const endIndex = startIndex + jobsPerPage;
        const jobsToDisplay = filteredJobs.slice(startIndex, endIndex);

        jobsToDisplay.forEach(createJobBox);

        // Display pagination buttons
        updatePaginationButtons();
    }
}


    // Function to handle "Previous" button click
    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            searchJobs();
        }
    }

    // Function to update the visibility of pagination buttons
    function updatePaginationButtons() {
        const totalJobs = document.getElementById("job-container").childElementCount;

        const paginationButtons = document.getElementById("pagination-buttons");
        paginationButtons.style.display = totalJobs > jobsPerPage ? "flex" : "none";
    }


    // Initial display of job boxes
    searchJobs();

    // Helper function to format date
    function formatDate(date) {
        const now = new Date();
        const diff = now - date;

        // Convert milliseconds to days
        const days = Math.floor(diff / (24 * 60 * 60 * 1000));

        if (days === 0) {
            return 'Today';
        } else if (days === 1) {
            return 'Yesterday';
        } else if (days < 7) {
            return `${days} days ago`;
        } else if (days < 30) {
            const weeks = Math.floor(days / 7);
            return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
        } else if (days < 365) {
            const months = Math.floor(days / 30);
            return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        } else {
            const years = Math.floor(days / 365);
            return `${years} ${years === 1 ? 'year' : 'years'} ago`;
        }
    }
