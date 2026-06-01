const si = require('react-icons/si');
const fa = require('react-icons/fa');
const check = [
  'SiPython', 'SiJavascript', 'SiHtml5', 'SiCss3', 'SiTensorflow', 'SiKeras', 'SiPytorch', 'SiScikitlearn',
  'SiOpencv', 'SiNumpy', 'SiPandas', 'SiReact', 'SiNextdotjs', 'SiNodedotjs', 'SiExpress', 'SiVite', 'SiJquery',
  'SiFastapi', 'SiFlask', 'SiStreamlit', 'SiWordpress', 'SiBun', 'SiMysql', 'SiMongodb', 'SiSqlite', 'SiPostgresql',
  'SiVercel', 'SiNetlify', 'SiRender', 'SiCloudflare', 'SiDocker', 'SiGit', 'SiGithub', 'SiPostman', 'SiFigma', 'SiCanva',
  'SiPowershell', 'SiC'
];
check.forEach(name => {
  if (!si[name]) console.log('MISSING in SI:', name);
});
['FaJava', 'FaAws'].forEach(name => {
  if (!fa[name]) console.log('MISSING in FA:', name);
});
console.log('Done checking.');
