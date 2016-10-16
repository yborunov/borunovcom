import { scaleOrdinal, schemeCategory10, select } from 'd3'
import cloud from 'd3-cloud'

const skills = [
  ['HTML5', 4],
  ['CSS3', 3],
  ['UI/UX', 5],
  ['jQuery', 5],
  ['RWD', 4],
  ['Bootstrap', 4],
  ['LESS', 2],
  ['SASS', 1],
  ['Ionic', 0.5],
  // 
  ['JavaScript', 8],
  ['ES6', 1],
  ['React', 1],
  ['AngularJS', 2],
  ['Backbone.js', 1],
  ['TDD', 1],
  ['CoffeeScript', 1],
  ['PhoneGap', 1],
  ['Cordova', 1],
  // 
  ['NodeJs', 5],
  ['PHP', 8],
  ['Python', 1],
  ['Scala', 0.5],
  ['MySQL', 8],
  ['MongoDB', 1],
  ['Nginx', 8],
  // 
  ['Yii2', 1],
  ['Express', 1],
  ['OOP', 5],
  ['RESTful API', 5],
  ['Redis', 3],
  ['Memcache', 5],
  ['Apache', 8],
  // 
  ['Git', 6],
  ['AWS', 3],
  ['Google App Engine', 1],
  ['Docker', 2],
  ['Agile', 3],
  ['Scrum', 3],
  ['Photoshop', 8],
  ['Sketch', 1],
  ['TeamCity', 1]
]

// Calculate max years of experience
const maxExperience = Math.max.apply(null, skills.map(s => s[1]))

console.log(maxExperience)
var fill = scaleOrdinal(schemeCategory10);
var layout = cloud()
    .size([500, 500])
    .words(skills.map(function(d) {
      return {text: d[0], size: 10 + Math.round(d[1] / maxExperience * 90), test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

function draw(words) {
  select(".skills-cloud").html('')
  select(".skills-cloud").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}

export default () => {
  layout.start();
  setInterval(() => layout.start(), 1000)
}