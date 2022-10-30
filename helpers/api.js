const coachies = [
  {
    name: "Andrea",
    favorite: "🤿",
  },
  {
    name: "Jessica",
    favorite: "🎨",
  },
  {
    name: "Michael",
    favorite: "☕️",
  },
];

function getAllTeamMembers() {
  return coachies;
}

getAllTeamMembers();

function getTeamMemberByName(memberName) {
  return coachies.find((member) => {
    console.log(member);
    return member.name === memberName;
  });
}

getTeamMemberByName(Andrea);

// function fetcher(url) {
//   return fetch(url).then((res) => res.json());
// }

// export default coachies;
// export { getAllTeamMembers, getTeamMemberByName, fetcher };
