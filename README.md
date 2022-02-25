This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

install node_modules - npm install
to run project - npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I created fetchSpacexData() to fetch data from api 'https://api.spacexdata.com/v3/launches'
first I tried to get data in descending order using sort().
then I checked for duplicate key because I found duplicate key in json data.
Then I get the top 10 items using slice.
then set the top 10 data into component state
created LaunchList component to display data.
There I have created reusable card component to list out the launchdata.

Note - I tried to display suggested details in the UI but I didn't work much with css in the task becuase in the task didn't mentioned how data should be displayed.

