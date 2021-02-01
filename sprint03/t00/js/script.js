'use strict'

let superTeam = {
  title: String(),
  leader: String(),
  members: Array(),
  memberCount: Number(),
  agenda: String(),
  isEvel: Boolean()
}

let getSuperTeam = () => {
  superTeam.title = prompt("Enter the Team title.\nUsage: list of character");
  superTeam.leader = prompt("Enter the Team-leader name\nUsage: list of \
character");
  superTeam.members = (prompt("Enter list of team members\nUsage: list of \
characters, separeted by coma", " ")).split(',');
  superTeam.memberCount = (superTeam.members).length + 1;
  superTeam.agenda = prompt("Subscribe your Team\nUsage: sevegal word about \
your team.")
  superTeam.isEvel = Boolean(prompt("Are you evil?\nUsage: enter yes if true \
or leave blank if not."))
}

getSuperTeam();
alert(`Here's the team:
name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members.join(', ')}
memberCount - ${superTeam.members.length}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`);
