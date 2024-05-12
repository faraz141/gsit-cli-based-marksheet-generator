#! usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "which class do you generate your marksheet",
    type: "list",
    name: "class",
    choices: ["IX", "X", "XI", "XII"],
  },
]);
if (answer.class === "IX") {
  let numberAns = await inquirer.prompt([
    {
      message: "Enter your English number",
      type: "number",
      name: "englishNumber",
    },
    {
      message: "Enter your Physics number",
      type: "number",
      name: "physicsNumber",
    },
    {
      message: "Enter your Mathematics number",
      type: "number",
      name: "mathematicsNumber",
    },
    {
      message: "Enter your Chemistry number",
      type: "number",
      name: "chemistryNumber",
    },
    {
      message: "Enter your Biology number",
      type: "number",
      name: "biologyNumber",
    },
    {
      message: "Enter your Islamiat number",
      type: "number",
      name: "islamiatNumber",
    },
    {
      message: "Enter your Urdu number",
      type: "number",
      name: "urduNumber",
    },
  ]);
  console.log(`SUBJECT      NUMBER`);
  console.log(`  `);
  console.log(`ENGLISH       ${numberAns.englishNumber}`);
  console.log(`PHYSICS       ${numberAns.physicsNumber}`);
  console.log(`MATHEMATICS   ${numberAns.mathematicsNumber}`);
  console.log(`BIOLOGY       ${numberAns.biologyNumber}`);
  console.log(`CHEMISTRY     ${numberAns.chemistryNumber}`);
  console.log(`ISLAMIAT      ${numberAns.islamiatNumber}`);
  console.log(`URDU          ${numberAns.urduNumber}`);
  let marksObtained =
    numberAns.englishNumber +
    numberAns.physicsNumber +
    numberAns.mathematicsNumber +
    numberAns.chemistryNumber +
    numberAns.biologyNumber +
    numberAns.islamiatNumber +
    numberAns.urduNumber;
  let totalMarks = 550;
  console.log(`  `);
  console.log(`Total Marks = ${totalMarks}`);
  console.log(`Obtained Marks = ${marksObtained}`);
  let percentage = (marksObtained * 100) / totalMarks;
  console.log(`Percentage = ${percentage}%`);
  if (percentage >= 80 && percentage <= 100) {
    console.log(`GRADE   = A+ `);
  } else if (percentage >= 70 && percentage <= 79) {
    console.log(`GRADE   = A`);
  } else if (percentage >= 60 && percentage <= 69) {
    console.log(`GRADE   = B`);
  } else if (percentage >= 50 && percentage <= 59) {
    console.log(`GRADE   = C`);
  } else if (percentage >= 40 && percentage <= 49) {
    console.log(`GRADE   = A`);
  } else {
    console.log(`FAILED`);
  }
} else if (answer.class === "X") {
  let numberAns = await inquirer.prompt([
    {
      message: "Enter your English number",
      type: "number",
      name: "englishNumber",
    },
    {
      message: "Enter your Physics number",
      type: "number",
      name: "physicsNumber",
    },
    {
      message: "Enter your Mathematics number",
      type: "number",
      name: "mathematicsNumber",
    },
    {
      message: "Enter your Chemistry number",
      type: "number",
      name: "chemistryNumber",
    },
    {
      message: "Enter your Biology number",
      type: "number",
      name: "biologyNumber",
    },
    {
      message: "Enter your Sindhi number",
      type: "number",
      name: "sindhiNumber",
    },
    {
      message: "Enter your Pst number",
      type: "number",
      name: "pstNumber",
    },
  ]);
  console.log(`SUBJECT      NUMBER`);
  console.log(`  `);
  console.log(`ENGLISH       ${numberAns.englishNumber}`);
  console.log(`PHYSICS       ${numberAns.physicsNumber}`);
  console.log(`MATHEMATICS   ${numberAns.mathematicsNumber}`);
  console.log(`BIOLOGY       ${numberAns.biologyNumber}`);
  console.log(`CHEMISTRY     ${numberAns.chemistryNumber}`);
  console.log(`SINDHI        ${numberAns.islamiatNumber}`);
  console.log(`PST           ${numberAns.urduNumber}`);
  let marksObtained =
    numberAns.englishNumber +
    numberAns.physicsNumber +
    numberAns.mathematicsNumber +
    numberAns.chemistryNumber +
    numberAns.biologyNumber +
    numberAns.sindhiNumber +
    numberAns.pstNumber;
  let totalMarks = 550;
  console.log(`  `);
  console.log(`Total Marks = ${totalMarks}`);
  console.log(`Obtained Marks = ${marksObtained}`);
  let percentage = (marksObtained * 100) / totalMarks;
  console.log(`Percentage = ${percentage}%`);
  if (percentage >= 80 && percentage <= 100) {
    console.log(`GRADE   = A+ `);
  } else if (percentage >= 70 && percentage <= 79) {
    console.log(`GRADE   = A`);
  } else if (percentage >= 60 && percentage <= 69) {
    console.log(`GRADE   = B`);
  } else if (percentage >= 50 && percentage <= 59) {
    console.log(`GRADE   = C`);
  } else if (percentage >= 40 && percentage <= 49) {
    console.log(`GRADE   = A`);
  } else {
    console.log(`FAILED`);
  }
} else if (answer.class === "XI") {
  const answer2 = await inquirer.prompt([
    {
      message: "please select one of them",
      name: "answer2",
      type: "list",
      choices: ["pre-medical", "pre-engineering"],
    },
  ]);
  if (answer2.class === "pre-engineering") {
    let numberAns = await inquirer.prompt([
      {
        message: "Enter your English number",
        type: "number",
        name: "englishNumber",
      },
      {
        message: "Enter your Physics number",
        type: "number",
        name: "physicsNumber",
      },
      {
        message: "Enter your Mathematics number",
        type: "number",
        name: "mathematicsNumber",
      },
      {
        message: "Enter your Chemistry number",
        type: "number",
        name: "chemistryNumber",
      },
      {
        message: "Enter your Islamiat number",
        type: "number",
        name: "islamiatNumber",
      },
      {
        message: "Enter your Urdu number",
        type: "number",
        name: "urduNumber",
      },
    ]);
    console.log(`SUBJECT      NUMBER`);
    console.log(`  `);
    console.log(`ENGLISH       ${numberAns.englishNumber}`);
    console.log(`PHYSICS       ${numberAns.physicsNumber}`);
    console.log(`MATHEMATICS   ${numberAns.mathematicsNumber}`);
    console.log(`CHEMISTRY     ${numberAns.chemistryNumber}`);
    console.log(`URDU          ${numberAns.islamiatNumber}`);
    console.log(`ISLAMIAT      ${numberAns.urduNumber}`);
    let marksObtained =
      numberAns.englishNumber +
      numberAns.physicsNumber +
      numberAns.mathematicsNumber +
      numberAns.chemistryNumber +
      numberAns.urduNumber +
      numberAns.islamiatNumber;
    let totalMarks = 550;
    console.log(`  `);
    console.log(`Total Marks = ${totalMarks}`);
    console.log(`Obtained Marks = ${marksObtained}`);
    let percentage = (marksObtained * 100) / totalMarks;
    console.log(`Percentage = ${percentage}%`);
    if (percentage >= 80 && percentage <= 100) {
      console.log(`GRADE   = A+ `);
    } else if (percentage >= 70 && percentage <= 79) {
      console.log(`GRADE   = A`);
    } else if (percentage >= 60 && percentage <= 69) {
      console.log(`GRADE   = B`);
    } else if (percentage >= 50 && percentage <= 59) {
      console.log(`GRADE   = C`);
    } else if (percentage >= 40 && percentage <= 49) {
      console.log(`GRADE   = A`);
    } else {
      console.log(`FAILED`);
    }
  } else if (answer2.class === "pre-medical") {
    let numberAns = await inquirer.prompt([
      {
        message: "Enter your English number",
        type: "number",
        name: "englishNumber",
      },
      {
        message: "Enter your Physics number",
        type: "number",
        name: "physicsNumber",
      },
      {
        message: "Enter your Biology number",
        type: "number",
        name: "biologyNumber",
      },
      {
        message: "Enter your Chemistry number",
        type: "number",
        name: "chemistryNumber",
      },
      {
        message: "Enter your Islamiat number",
        type: "number",
        name: "islamiatNumber",
      },
      {
        message: "Enter your Urdu number",
        type: "number",
        name: "urduNumber",
      },
    ]);
    console.log(`SUBJECT      NUMBER`);
    console.log(`  `);
    console.log(`ENGLISH       ${numberAns.englishNumber}`);
    console.log(`PHYSICS       ${numberAns.physicsNumber}`);
    console.log(`BIOLOGY       ${numberAns.biologyNumber}`);
    console.log(`CHEMISTRY     ${numberAns.chemistryNumber}`);
    console.log(`URDU          ${numberAns.islamiatNumber}`);
    console.log(`ISLAMIAT      ${numberAns.urduNumber}`);
    let marksObtained =
      numberAns.englishNumber +
      numberAns.physicsNumber +
      numberAns.biologyNumber +
      numberAns.chemistryNumber +
      numberAns.urduNumber +
      numberAns.islamiatNumber;
    let totalMarks = 550;
    console.log(`  `);
    console.log(`Total Marks = ${totalMarks}`);
    console.log(`Obtained Marks = ${marksObtained}`);
    let percentage = (marksObtained * 100) / totalMarks;
    console.log(`Percentage = ${percentage}%`);
    if (percentage >= 80 && percentage <= 100) {
      console.log(`GRADE   = A+ `);
    } else if (percentage >= 70 && percentage <= 79) {
      console.log(`GRADE   = A`);
    } else if (percentage >= 60 && percentage <= 69) {
      console.log(`GRADE   = B`);
    } else if (percentage >= 50 && percentage <= 59) {
      console.log(`GRADE   = C`);
    } else if (percentage >= 40 && percentage <= 49) {
      console.log(`GRADE   = A`);
    } else {
      console.log(`FAILED`);
    }
  }
} else if (answer.class === "XII") {
  const answer3 = await inquirer.prompt([
    {
      message: "please select one of them",
      name: "answer3",
      type: "list",
      choices: ["pre-medical", "pre-engineering"],
    },
  ]);
  if (answer3.class === "pre-medical") {
    let numberAns = await inquirer.prompt([
      {
        message: "Enter your English number",
        type: "number",
        name: "englishNumber",
      },
      {
        message: "Enter your Physics number",
        type: "number",
        name: "physicsNumber",
      },
      {
        message: "Enter your Chemistry number",
        type: "number",
        name: "chemistryNumber",
      },
      {
        message: "Enter your Biology number",
        type: "number",
        name: "biologyNumber",
      },
      {
        message: "Enter your Pst number",
        type: "number",
        name: "pstNumber",
      },
      {
        message: "Enter your Urdu number",
        type: "number",
        name: "urduNumber",
      },
    ]);
    console.log(`SUBJECT      NUMBER`);
    console.log(`  `);
    console.log(`ENGLISH       ${numberAns.englishNumber}`);
    console.log(`PHYSICS       ${numberAns.physicsNumber}`);
    console.log(`BIOLOGY       ${numberAns.biologyNumber}`);
    console.log(`CHEMISTRY     ${numberAns.chemistryNumber}`);
    console.log(`URDU          ${numberAns.pstNumber}`);
    console.log(`ISLAMIAT      ${numberAns.urduNumber}`);
    let marksObtained =
      numberAns.englishNumber +
      numberAns.physicsNumber +
      numberAns.biologyNumber +
      numberAns.chemistryNumber +
      numberAns.urduNumber +
      numberAns.pstNumber;
    let totalMarks = 550;
    console.log(`  `);
    console.log(`Total Marks = ${totalMarks}`);
    console.log(`Obtained Marks = ${marksObtained}`);
    let percentage = (marksObtained * 100) / totalMarks;
    console.log(`Percentage = ${percentage}%`);
    if (percentage >= 80 && percentage <= 100) {
      console.log(`GRADE   = A+ `);
    } else if (percentage >= 70 && percentage <= 79) {
      console.log(`GRADE   = A`);
    } else if (percentage >= 60 && percentage <= 69) {
      console.log(`GRADE   = B`);
    } else if (percentage >= 50 && percentage <= 59) {
      console.log(`GRADE   = C`);
    } else if (percentage >= 40 && percentage <= 49) {
      console.log(`GRADE   = A`);
    } else {
      console.log(`FAILED`);
    }
  } else if (answer3.class === "pre-engineering") {
    let numberAns = await inquirer.prompt([
      {
        message: "Enter your English number",
        type: "number",
        name: "englishNumber",
      },
      {
        message: "Enter your Physics number",
        type: "number",
        name: "physicsNumber",
      },
      {
        message: "Enter your Chemistry number",
        type: "number",
        name: "chemistryNumber",
      },
      {
        message: "Enter your Mathematics number",
        type: "number",
        name: "mathematicsNumber",
      },
      {
        message: "Enter your Pst number",
        type: "number",
        name: "pstNumber",
      },
      {
        message: "Enter your Urdu number",
        type: "number",
        name: "urduNumber",
      },
    ]);
    console.log(`SUBJECT      NUMBER`);
    console.log(`  `);
    console.log(`ENGLISH       ${numberAns.englishNumber}`);
    console.log(`PHYSICS       ${numberAns.physicsNumber}`);
    console.log(`BIOLOGY       ${numberAns.mathematicsNumber}`);
    console.log(`CHEMISTRY     ${numberAns.chemistryNumber}`);
    console.log(`URDU          ${numberAns.pstNumber}`);
    console.log(`ISLAMIAT      ${numberAns.urduNumber}`);
    let marksObtained =
      numberAns.englishNumber +
      numberAns.physicsNumber +
      numberAns.mathematicsNumber +
      numberAns.chemistryNumber +
      numberAns.urduNumber +
      numberAns.pstNumber;
    let totalMarks = 550;
    console.log(`  `);
    console.log(`Total Marks = ${totalMarks}`);
    console.log(`Obtained Marks = ${marksObtained}`);
    let percentage = (marksObtained * 100) / totalMarks;
    console.log(`Percentage = ${percentage}%`);
    if (percentage >= 80 && percentage <= 100) {
      console.log(`GRADE   = A+ `);
    } else if (percentage >= 70 && percentage <= 79) {
      console.log(`GRADE   = A`);
    } else if (percentage >= 60 && percentage <= 69) {
      console.log(`GRADE   = B`);
    } else if (percentage >= 50 && percentage <= 59) {
      console.log(`GRADE   = C`);
    } else if (percentage >= 40 && percentage <= 49) {
      console.log(`GRADE   = A`);
    } else {
      console.log(`FAILED`);
    }
  }
} else {
  console.log("please select one of the option");
}
