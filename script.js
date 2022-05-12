let data =
[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const links = document.querySelectorAll(".period_link")
let period_control = "daily"
let previous_period_content = "Yesterday"
const hours = document.querySelectorAll(".hours")
const previous_period = document.querySelectorAll(".previous_period")
const previous_time = document.querySelectorAll(".previous_time")

// Definfing the firsts settings
  hours.forEach(hour => {
    hour.innerHTML = data[hour.id].timeframes[period_control].current
  })

  previous_time.forEach(time => {
    time.innerHTML = data[time.parentNode.parentNode.id].timeframes[period_control].previous
  })

  previous_period.forEach(period => {
    period.innerHTML = previous_period_content
  })


links.forEach(link => 
// Setting the link color on click
        link.addEventListener("click", function(){
        links.forEach(link => {
            link.classList.add("blue_color")
            link.classList.remove("white_color")
        })
        link.classList.remove("blue_color")
        link.classList.add("white_color")

// Defining the prevous period conent
        if(link.classList.contains("0")) {
            period_control = "daily";
            previous_period_content = "Yesterday"
        } else if (link.classList.contains("1")) {
            period_control = "weekly";
            previous_period_content = "Last Week"
        } else if (link.classList.contains("2")) {
            period_control = "monthly";
            previous_period_content = "Last Month"
        }

//  Setting the Hour Content
        hours.forEach(hour => {
          hour.innerHTML = data[hour.parentNode.parentNode.id].timeframes[period_control].current
        })

// Setting the previous preiod hours
        previous_time.forEach(time => {
          time.innerHTML = data[time.parentNode.parentNode.id].timeframes[period_control].previous
        })

//  Setting the preveius period
        previous_period.forEach(period => {
          period.innerHTML = previous_period_content
        })

        
    }
))


   


