// 제작 : 킬드 - 도움 : 블루

const { Client, RichEmbed } = require('discord.js');
var os = require('os');

//클라이언트

const mclient = new Client();

var date = new Date();
var botp = '!';
var token = process.env.BOT_TOKEN

//봇 시작

mclient.on('ready', () => {
	console.log('준비 완료');
	console.log('봇 시작');
	console.log('토큰 값은 : ' + token + ' 입니다.');
	console.log('봇 가동 시간 : ' + date.getHours() + '시 ' + date.getMinutes() + '분 ' + ' 입니다.');
	mclient.user.setGame("킬드봇 | !도움");
});

//킬드봇 명령어

mclient.on('message', msg => {
	if(msg.author.equals(bot.user)) return;
	
	if(msg.content.startsWith("!도움")) {
		const embed = new RichEmbed()
			.setTitle("도움")
			.setColor(0x3D85C6)
			.setDescription("안녕하세요! 저는 킬드봇 이에요! 반갑습니다!" + "\n  제 기능은 : " + "!도움,인사,!서버 정보 등이 있습니다!" + "\n 현재 시각 : " + date.getHours() + '시 ' + date.getMinutes() + '분 ' + ' 입니다.')
			msg.author.sendMessage(embed);
			msg.reply(" 님 안녕하세요! 도움말은 DM 으로 전송완료!");
	};
	
	if(msg.content.startsWith("킬드 봇 안녕")) {
		msg.reply(" 님 안녕하세요!");
	};
	
	if(msg.content === botp + "정보") {
		const embed = new RichEmbed()
			.setTitle("정보")
			.setColor(0x3D85C6)
			.setDescription( 방 이름 : " + msg.channel.name + "\n  서버 이름 : " + msg.guild.name + "\n  시간 : " + date.getHours() + '시 ' + date.getMinutes() + '분 ' + ' 입니다!')
			msg.channel.send(embed);
	};
	
	if(msg.content === botp + "시간") {
		msg.reply(" 님 시간은 : " + date.getHours() + '시 ' + date.getMinutes() + '분 ' + ' 입니다!');
	};
});
