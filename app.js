const daily = document.getElementById("daily");
const weekly = document.getElementById("Weekly");
const monthly = document.getElementById("Monthly");

const workPeriod = document.getElementById("work-period");
const playPeriod = document.getElementById("play-period");
const studyPeriod = document.getElementById("study-period");
const exercisePeriod = document.getElementById("exercise-period");
const socialPeriod = document.getElementById("social-period");
const selfCarePeriod = document.getElementById("selfeCare-period");

const work_PreviousPeriod = document.getElementById("work-previous-period");
const play_PreviousPeriod = document.getElementById("play-previous-period");
const study_PreviousPeriod = document.getElementById("study-previous-period");
const exercise_PreviousPeriod = document.getElementById("exercise-previous-period"
);
const social_PreviousPeriod = document.getElementById("social-previous-period");
const selfCare_PreviousPeriod = document.getElementById("selfCare-previous-period"
);


const periodFilter = document.querySelectorAll(".period-filter");
const previousTitleElments= document.querySelectorAll('.previous-title')


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    periodFilter.forEach((element) => {
      element.addEventListener("click", function () {
        const selected = document.querySelector('input[name="period"]:checked');


        if (selected.value == 1) {

            previousTitleElments.forEach((previousTitle)=>{
                previousTitle.textContent = 'Yesterday - '
            })
            


          workPeriod.textContent = data[0].timeframes.daily.current;
          work_PreviousPeriod.textContent = data[0].timeframes.daily.previous;

          playPeriod.textContent = data[1].timeframes.daily.current;
          play_PreviousPeriod.textContent = data[1].timeframes.daily.previous;

          studyPeriod.textContent = data[2].timeframes.daily.current;
          study_PreviousPeriod.textContent = data[2].timeframes.daily.previous;

          exercisePeriod.textContent = data[3].timeframes.daily.current;
          exercise_PreviousPeriod.textContent =
            data[3].timeframes.daily.previous;

          socialPeriod.textContent = data[4].timeframes.daily.current;
          social_PreviousPeriod.textContent = data[4].timeframes.daily.previous;

          selfCarePeriod.textContent = data[5].timeframes.daily.current;
          selfCare_PreviousPeriod.textContent =
            data[5].timeframes.daily.previous;
        } else if (selected.value == 2) {

            previousTitleElments.forEach((previousTitle)=>{
                previousTitle.textContent = 'Last Week - '
            })

          workPeriod.textContent = data[0].timeframes.weekly.current;
          work_PreviousPeriod.textContent = data[0].timeframes.weekly.previous;

          playPeriod.textContent = data[1].timeframes.weekly.current;
          play_PreviousPeriod.textContent = data[1].timeframes.weekly.previous;

          studyPeriod.textContent = data[2].timeframes.weekly.current;
          study_PreviousPeriod.textContent = data[2].timeframes.weekly.previous;

          exercisePeriod.textContent = data[3].timeframes.weekly.current;
          exercise_PreviousPeriod.textContent =
            data[3].timeframes.weekly.previous;

          socialPeriod.textContent = data[4].timeframes.weekly.current;
          social_PreviousPeriod.textContent =
            data[4].timeframes.weekly.previous;

          selfCarePeriod.textContent = data[5].timeframes.weekly.current;
          selfCare_PreviousPeriod.textContent =
            data[5].timeframes.weekly.previous;
        } else if (selected.value == 3) {

            previousTitleElments.forEach((previousTitle)=>{
                previousTitle.textContent = 'Last Month - '
            })


          workPeriod.textContent = data[0].timeframes.monthly.current;
          work_PreviousPeriod.textContent = data[0].timeframes.monthly.previous;

          playPeriod.textContent = data[1].timeframes.monthly.current;
          play_PreviousPeriod.textContent = data[1].timeframes.monthly.previous;

          studyPeriod.textContent = data[2].timeframes.monthly.current;
          study_PreviousPeriod.textContent =
            data[2].timeframes.monthly.previous;

          exercisePeriod.textContent = data[3].timeframes.monthly.current;
          exercise_PreviousPeriod.textContent =
            data[3].timeframes.monthly.previous;

          socialPeriod.textContent = data[4].timeframes.monthly.current;
          social_PreviousPeriod.textContent =
            data[4].timeframes.monthly.previous;

          selfCarePeriod.textContent = data[5].timeframes.monthly.current;
          selfCare_PreviousPeriod.textContent =
            data[5].timeframes.monthly.previous;
        }
      });
    });

    previousTitleElments.forEach((previousTitle)=>{
        previousTitle.textContent = 'Yesterday - '
    })

    workPeriod.textContent = data[0].timeframes.daily.current;
    work_PreviousPeriod.textContent = data[0].timeframes.daily.previous;

    playPeriod.textContent = data[1].timeframes.daily.current;
    play_PreviousPeriod.textContent = data[1].timeframes.daily.previous;

    studyPeriod.textContent = data[2].timeframes.daily.current;
    study_PreviousPeriod.textContent = data[2].timeframes.daily.previous;

    exercisePeriod.textContent = data[3].timeframes.daily.current;
    exercise_PreviousPeriod.textContent =
      data[3].timeframes.daily.previous;

    socialPeriod.textContent = data[4].timeframes.daily.current;
    social_PreviousPeriod.textContent = data[4].timeframes.daily.previous;

    selfCarePeriod.textContent = data[5].timeframes.daily.current;
    selfCare_PreviousPeriod.textContent =
      data[5].timeframes.daily.previous;
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
