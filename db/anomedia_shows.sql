-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: anomedia
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shows`
--

DROP TABLE IF EXISTS `shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shows` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `averageRating` varchar(255) DEFAULT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `endDate` varchar(255) DEFAULT NULL,
  `ageRating` varchar(255) DEFAULT NULL,
  `airedOn` varchar(255) DEFAULT NULL,
  `ratingRank` varchar(255) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `coverImage` varchar(255) DEFAULT NULL,
  `genres` varchar(255) DEFAULT NULL,
  `youtubeTrailerId` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shows_title_unique` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shows`
--

LOCK TABLES `shows` WRITE;
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
INSERT INTO `shows` VALUES (1,'Cowboy Bebop','In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\r\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member\'s dark and mysterious past little by little. \r\nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.  \r\n[Written by MAL Rewrite]','85.43','1998-04-03','1999-04-24','17+ (violence & profanity)','TV','23','https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256','https://media.kitsu.io/anime/cover_images/1/original.jpg?1519178801','3,5,6,4,1,2','qig4KOK2R2g','2018-04-17 19:10:55','2018-04-17 19:10:55'),(2,'Trigun','Vash the Stampede is the man with a $$60,000,000 bounty on his head. The reason: he\'s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title \"The Humanoid Typhoon.\" He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.\r\nWith his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash\'s agonizing past will be unraveled and his morality and principles pushed to the breaking point.\r\n[Written by MAL Rewrite]','83.86','1998-04-01','1998-09-30','Teens 13 or older','TV','124','https://media.kitsu.io/anime/poster_images/3/original.jpg?1432381605','https://media.kitsu.io/anime/cover_images/3/original.jpg','3,5,1','bJVyIXeUznY','2018-04-17 19:10:55','2018-04-17 19:10:55'),(3,'Monster','Dr. Kenzou Tenma is a renowned brain surgeon of Japanese descent working in Europe. Highly lauded by his peers as one of the great young minds that will revolutionize the field, he is blessed with a beautiful fiancée and is on the cusp of a big promotion in the hospital he works at. But all of that is about to change with a grave dilemma that Kenzou faces one night—whether to save the life of a small boy or that of the town\'s mayor. Despite being pressured by his superiors to perform surgery on the mayor, his morals force him to perform the surgery on the other critical patient, saving his life and forfeiting the mayor\'s. A doctor is taught to believe that all life is equal; however, when a series of murders occur in the surgeon\'s vicinity, all of the evidence pointing to the boy he saved, Kenzou\'s beliefs are shaken. Along his journey to unravel the true identity of his little patient, Kenzou discovers that the fate of the world may be intertwined with the mysterious child.\r\n[Written by MAL Rewrite]','84.2','2004-04-07','2005-09-28','Mild Nudity','TV','97','https://media.kitsu.io/anime/poster_images/10/original.jpg?1495114402','https://media.kitsu.io/anime/cover_images/10/original.jpg','7,10,20,21,19,4','9aS-EgdAq6U','2018-04-17 19:10:55','2018-04-17 19:10:55'),(4,'Honey and Clover','Yuuta, Takumi, and Shinobu share a six-tatami room apartment with no bath. The rent is low and it\'s perfect for poor college students such as themselves. Shinobu is a mysterious, quirky person, who does things on a whim. Takumi is passionate both in work and love, and Yuuta is a simple person with simple dreams and desires. That is, until he meets Hagumi, a petite girl with enormous amount of talent. Hagumi is fondly called Hagu by Shuuji, who serves as Hagu\'s guardian. Hagu meets Ayumi, nicknamed Ayu, and they become close friends almost instantly. Meanwhile, Ayu falls for one of the boys...\r\nThe joys of falling in love, the pain of letting go, discovering one\'s self, and finding the courage to move on—these are some of the things that the characters in Hachimitsu to Clover experience as they take part in the play staged by fate.','80.14','2005-04-15','2005-09-27','Teens 13 or older','TV','492','https://media.kitsu.io/anime/poster_images/7/original.jpg?1417880955','https://media.kitsu.io/anime/cover_images/7/original.jpg','3,4,14','6TN4a0kZuXg','2018-04-17 19:10:55','2018-04-17 19:10:55'),(5,'Initial D Fourth Stage','Takumi Fujiwara and brothers Keisuke and Ryousuke Takahashi have formed \"Project D,\" a racing team aimed at bringing their driving skills to their full potential outside their prefecture. Using the internet, Project D issues challenges to other racing teams and posts results of their races. Managed by Ryousuke, the team has Takumi engaging in downhill battles with his AE86, while Keisuke challenges opponents uphill. Among their rivals are the Seven-Star Leaf (SSR) and Todo-juku.','81.38','2004-04-17','2006-02-18','Teens 13 or older','TV','355','https://media.kitsu.io/anime/poster_images/9/original.jpeg?1438856488','https://media.kitsu.io/anime/cover_images/9/original.jpg?1519178856','13,17,4,1,15','T0HCsCYVM-Y','2018-04-17 19:10:55','2018-04-17 19:10:55'),(6,'Yakitate!! Japan','Yakitate means \"fresh baked\", but the word \"Japan\" is actually a pun - pan means bread in Japanese, so Kazuma is out to make Japan, a unique Japanese bread to compete with the best bread from around the world!\r\n\r\nAzuma became obsessed with bread when he was six years old. His sister yelled that their family should start having bread for breakfast sometimes, but their grandfather refused to even consider it, as he would only eat natto, miso soup, and rice for breakfast. Kazuma agreed, saying he didn`t like bread, but his sister kidnaps him and takes him to a bread store to show him the wonders of fresh-baked bread. Not only is Kazuma converted, but the owner discovers that Kazuma has the magical \"Hands of the Sun\" whose warmth makes them particularly suited to making bread. The owner packs up shop and goes to Tokyo to fulfill his dream of making Japan, but Kazuma continues his bread-baking dream as well, and ends up going to Tokyo himself when he`s sixteen, to compete for a spot at the foremost bread store in Japan - Pantasia!','79.38','2004-10-12','2006-03-14','Teens 13 or older','TV','613','https://media.kitsu.io/anime/poster_images/19/original.jpg?1495911581','https://media.kitsu.io/anime/cover_images/19/original.jpg','3,62','xs6xzznC9tY','2018-04-17 19:10:55','2018-04-17 19:10:55'),(7,'Cowboy Bebop: Knockin\' on Heaven\'s Door','Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\r\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\r\n[Written by MAL Rewrite]','84.19','2001-09-01','2001-09-01','17+ (violence & profanity)','movie','100','https://media.kitsu.io/anime/poster_images/2/original.jpg?1435249715','https://media.kitsu.io/anime/cover_images/2/original.png','5,6,7,4,1','hc7IxJ93jtM','2018-04-17 19:10:55','2018-04-17 19:10:55'),(8,'Trinity Blood','The background is in the distant future after the destruction brought about by Armageddon. The war between the vampires and the humans continue to persist. In order to protect the humans from the vampires, the Vatican has to rely on other allies to counter the situation. The protagonist,  Abel Nightroad, is a traveling priest from the Vatican and a crusnik, a vampire that drinks the blood of vampires. He is a member of the \"Ax\", a special operations group led by Cardinal Catherina Sforza. He encounters a young girl called Esther, who decides to go with him to Rome and train at the Vatican. Soon after he meets her, the order of Rozencreuz, led by Abel\'s twin, Cain, tries to continue the war so they can rule the world. It\'s up to Abel and the AX to try and stop them.','72.46','2005-04-29','2005-10-28','Violence, Profanity','TV','2280','https://media.kitsu.io/anime/poster_images/18/original.jpg?1445567754','https://media.kitsu.io/anime/cover_images/18/original.jpg','9,26,1','35GXUVBRIEM','2018-04-17 19:10:55','2018-04-17 19:10:55'),(9,'Witch Hunter Robin','Witches are individuals with special powers like ESP, telekinesis, mind control, etc. (not the typical hogwart and newt potions). Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J\'s witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place.\r\n(Source: ANN)','72.84','2002-07-02','2002-12-24','Teens 13 or older','TV','2141','https://media.kitsu.io/anime/poster_images/4/original.jpg?1408440451','https://media.kitsu.io/anime/cover_images/4/original.jpg','7,8,9,10,4,1','7UkaILjPk8M','2018-04-17 19:10:55','2018-04-17 19:10:55'),(10,'School Rumble','Just the words \"I love you,\" and everything changes—such is the nature of the bittersweet trials of high school romance. Tenma Tsukamoto, a second year, is on a quest to confess her feelings to the boy she likes. Kenji Harima, a delinquent with a sizable reputation, is in a similar situation, as he cannot properly convey his feelings to the one he loves. Between school, friends, rivalries, and hobbies, these two will find that high school romance is no walk in the park, especially as misunderstandings further complicate their plight.School Rumble is a high-octane romantic comedy full of relatable situations, as Tenma and Kenji both try to win the hearts of those they desire.\r\n[Written by MAL Rewrite]','79.42','2004-10-05','2005-03-29','Teens 13 or older','TV','603','https://media.kitsu.io/anime/poster_images/15/original.jpg?1442610450','https://media.kitsu.io/anime/cover_images/15/original.jpg','3,24,14','0Uv3_zjM448','2018-04-17 19:10:56','2018-04-17 19:10:56'),(11,'Desert Punk','In the future, Japan is a wasteland. In the Great Kantou Desert, scattered humans seek out a living in the hot sand. Among them, a short-statured man they call \"Sunabouzu\" makes a living as a bounty hunter. Like a demon of the sand, he seems unbeatable. Yet, like all men, he has a particular weakness for the opposite sex...\r\n\r\n(Source: ANN)','73.08','2004-10-06','2005-03-30','Violence, Profanity','TV','2050','https://media.kitsu.io/anime/poster_images/16/original.jpg?1515895688','https://media.kitsu.io/anime/cover_images/16/original.jpg?1519178893','3,5,1,25,2','XMCqw1vxMnY','2018-04-17 19:10:56','2018-04-17 19:10:56'),(12,'Eyeshield 21','Sena is like any other shy kid starting high school; he\'s just trying to survive. Constantly bullied, he\'s accustomed to running away.\r\nSurviving high school is about to become a lot more difficult after Hiruma, captain of the school\'s American football team, witnesses Sena\'s incredible agility and speed during an escape from some bullies. Hiruma schemes to make Sena the running back of his school team, The Devil Bats, hoping that it will turn around the squad\'s fortunes from being the laughingstock of Japan\'s high school leagues, to title contender.\r\nTo protect his precious star player from rivaling recruiters, he enlists Sena as \"team secretary,\" giving him a visored helmet and the nickname \"Eyeshield 21\" to hide his identity.\r\nThe Devilbats will look to make their way to the Christmas Bowl, an annual tournament attended by the best football teams in Japan, with \"Eyeshield 21\" leading the way. Will they be able to win the Christmas Bowl? Will Sena be able to transform from a timid, undersized freshman to an all-star player? Put on your pads and helmet to find out!','78.66','2005-04-06','2008-03-19','Teens 13 or older','TV','706','https://media.kitsu.io/anime/poster_images/6/original.jpg?1420129354','https://media.kitsu.io/anime/cover_images/6/original.jpg','3,13,1','','2018-04-17 19:10:56','2018-04-17 19:10:56'),(13,'One Piece','Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\r\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\r\n[Written by MAL Rewrite]','85.25','1999-10-20',NULL,'Teens 13 or older','TV','38','https://media.kitsu.io/anime/poster_images/12/original.png?1490541434','https://media.kitsu.io/anime/cover_images/12/original.jpg','3,23,11,4,1,63,2','um-tFlVamOI','2018-04-17 19:10:56','2018-04-17 19:10:56'),(14,'Texhnolyze','Cult-favorite Yoshitoshi ABe tempts us to witness man\'s downward spiral in a future overrun by violence, greed, and depravity. After Ichise loses an arm and leg, he\'s equipped with experimental robotic limbs against his will. When an army of men transformed into terrifying machines invades his city, Ichise rages against humanity\'s demise—but can his actions actually be the catalyst?\r\n\r\n(Source: Funimation)','77.75','2003-04-17','2003-09-25','Mild Nudity','TV','852','https://media.kitsu.io/anime/poster_images/17/original.jpg?1503862581','https://media.kitsu.io/anime/cover_images/17/original.jpg','5,20,4,1','Z19QTGvwg9I','2018-04-17 19:10:56','2018-04-17 19:10:56'),(15,'Naruto','Moments prior to Naruto Uzumaki\'s birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi\'s rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\r\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.\r\n[Written by MAL Rewrite]','76.62','2002-10-03','2007-02-08','Teens 13 or older','TV','1048','https://media.kitsu.io/anime/poster_images/11/original.jpg?1417705323','https://media.kitsu.io/anime/cover_images/11/original.jpg','3,22,23,1','j2hiC9BmJlQ','2018-04-17 19:10:56','2018-04-17 19:10:56'),(16,'Prince of Tennis','The world of tennis is harsh and highly competitive. Numerous schools from Japan battle it out to determine the best of the best. \r\nSeishin Gakuen Junior High School, more commonly known as Seigaku, is one of the most prominent contestants in this battle of the finest. Their team line-up gets even stronger with the sudden arrival of a young prodigy from the West, Ryouma Echizen, who is determined to prove himself and escape the towering shadow of his legendary father. This fine addition changes the team forever.Prince of Tennis follows the heartwarming and inspirational story of Ryouma on his quest to become one of the best tennis players the country has ever seen. He pushes himself hard so that he can one day surpass his father’s name and his own personal expectations. Alongside the rest of the Seigaku team, Ryouma fights to make his and his teammate\'s dreams come true.','77.18','2001-10-10','2005-03-23','Teens 13 or older','TV','939','https://media.kitsu.io/anime/poster_images/13/original.jpg?1408440479','https://media.kitsu.io/anime/cover_images/13/original.png','3,13,24,1','','2018-04-17 19:10:56','2018-04-17 19:10:56'),(17,'Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen','When mankind\'s savagery surpasses his fear of death, there is little hope for those who wish to live honest lives. Beneath a full moon, a young boy witnesses the murder of the bandits who had enslaved him, and is then christened with a new name by the man who rescued him. This boy is Shinta, now known as Kenshin Himura, and he is destined to become a swordsman. The softness of his heart does not befit the occupation, but his desire to protect the innocent is absolute.Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen details the origins of the man who would bear the name of Hitokiri Battousai long before he swore his oath not to kill and before he earned his reputation as an assassin. The young man’s heart is divided between justice and corruption, while the fate of a nation rests on his actions.\r\n[Written by MAL Rewrite]','84.28','1999-02-20','1999-09-22','17+ (violence & profanity)','OVA','84','https://media.kitsu.io/anime/poster_images/26/original.jpg?1486236385','https://media.kitsu.io/anime/cover_images/26/original.png?1519178953','22,27,32,4,14,1','QZ6OFUuVm8Q','2018-04-17 19:11:18','2018-04-17 19:11:18'),(18,'Neon Genesis Evangelion','In the year 2015, the world stands on the brink of destruction. Humanity\'s last hope lies in the hands of Nerv, a special agency under the United Nations, and their Evangelions, giant machines capable of defeating the Angels who herald Earth\'s ruin. Gendou Ikari, head of the organization, seeks compatible pilots who can synchronize with the Evangelions and realize their true potential. Aiding in this defensive endeavor are talented personnel Misato Katsuragi, Head of Tactical Operations, and Ritsuko Akagi, Chief Scientist.\r\n\r\nFace to face with his father for the first time in years, 14-year-old Shinji Ikari\'s average life is irreversibly changed when he is whisked away into the depths of Nerv, and into a harrowing new destiny—he must become the pilot of Evangelion Unit-01 with the fate of mankind on his shoulders.\r\nWritten by Hideaki Anno, Neon Genesis Evangelion is a heroic tale of a young boy who will become a legend. But as this psychological drama unfolds, ancient secrets beneath the big picture begin to bubble to the surface...\r\n\r\n(Source: MAL Rewrite)','83.46','1995-10-04','1996-03-27','Teens 13 or older','TV','159','https://media.kitsu.io/anime/poster_images/21/original.jpg?1423580507','https://media.kitsu.io/anime/cover_images/21/original.jpg','5,20,29,30,4,1','qW5DCdRp3rk','2018-04-17 19:11:18','2018-04-17 19:11:18'),(19,'Neon Genesis Evangelion: Death & Rebirth','In the year 2015, more than a decade has passed since the catastrophic event known as Second Impact befell mankind. During this time of recovery, a select few learned of beings known as the Angels—colossal malevolent entities with the intention of triggering the Third Impact and wiping out the rest of humanity.\r\n\r\nCalled into the city of Tokyo-3 by his father Gendou Ikari, teenager Shinji is thrust headlong into humanity\'s struggle. Separated from Gendou since the death of his mother, Shinji presumes that his father wishes to repair their shattered familial bonds; instead, he discovers that he was brought to pilot a giant machine capable of fighting the Angels, Evangelion Unit-01. Forced to battle against wave after wave of mankind\'s greatest threat, the young boy finds himself caught in the middle of a plan that could affect the future of humanity forever.\r\n\r\n(Source: MAL Rewrite)','71.5','1997-03-15','1997-03-15','17+ (violence & profanity)','movie','2681','https://media.kitsu.io/anime/poster_images/22/original.jpg?1495502941','https://media.kitsu.io/anime/cover_images/22/original.jpg?1519178933','5,20,30,4','eI8aUqsCovo','2018-04-17 19:11:18','2018-04-17 19:11:18'),(20,'Berserk','Born from the corpse of his mother, a young mercenary known only as Guts, embraces the battlefield as his only means of survival. Day in and day out, putting his life on the line just to make enough to get by, he moves from one bloodshed to the next.\r\n\r\nAfter a run-in with the Band of the Hawk, a formidable troop of mercenaries, Guts is recruited by their charismatic leader Griffith, nicknamed the \"White Hawk.\" As he quickly climbed the ranks in order to become the head of the offensive faction, Guts proves to be a mighty addition to Griffith\'s force, taking Midland by storm. However, while the band\'s quest for recognition continues, Guts slowly realizes that the world is not as black-and-white as he once assumed.\r\n\r\nSet in the medieval era, Berserk is a dark, gritty tale that follows one man\'s struggle to find his own path, while supporting another\'s lust for power, and the unimaginable tragedy that begins to turn the wheels of fate.\r\n\r\n(Source: MAL Rewrite)','83.81','1997-10-08','1998-04-01','Mild Nudity','TV','131','https://media.kitsu.io/anime/poster_images/24/original.jpg?1425414459','https://media.kitsu.io/anime/cover_images/24/original.jpg?1519178942','63,1,2,31,4,11,19,14,9,28','XUsev2OJlz8','2018-04-17 19:11:18','2018-04-17 19:11:18'),(21,'Aa! Megami-sama! (TV)','In a world where humans can have their wish granted via the Goddess Help Hotline, a human, Keiichi Morisato, summons the Goddess Belldandy by accident and jokes that she should stay with him forever. Unfortunately for him, his \"wish\" is granted.\r\nSuddenly, Keiichi is now living with this gorgeous woman all alone, causing him to be kicked out of the all-male dormitory he was staying in. But soon, after they find lodging in a Buddhist temple, Keiichi and Belldandy\'s relationship begins to blossom. Although they are both awkward and rather uncomfortable with one another at first, what awaits these two strangers could turn out to be an unexpected romance.\r\n[Written by MAL Rewrite]','73.97','2005-01-07','2005-07-08','Teens 13 or older','TV','1744','https://media.kitsu.io/anime/poster_images/31/original.jpg?1451358591','https://media.kitsu.io/anime/cover_images/31/original.jpg?1519178981','3,8,9,14','fohHBnpCoeI','2018-04-17 19:11:18','2018-04-17 19:11:18'),(22,'Ghost in the Shell','In the year 2029, advances in Cybernetics allow people to replace nearly all of their body parts and organs with robotics. Through these prosthetics, the weak are made strong, and the dying are given new life. Public Security Section 9 of Niihama City (a fictional setting inspired by Hong Kong), a diverse team of AI, cyborgs and unmodified humans, must investigate cases of corruption and terrorism. Major Motoko Kusanagi has full-body prosthetics, owing to a childhood accident. She, her second in command Batou and information specialist Ishikawa have been assigned an important task: to investigate a hacker known only as \"The Puppetmaster.\" But as Motoko and her team discover, things are never so simple.Ghost in the Shell is a futuristic thriller with intense action scenes mixed with slower artistic sequences and many philosophical questions about one\'s soul, gender and human identity in such an advanced age of technology.','83.91','1995-11-18','1995-11-18','Mild Nudity','movie','116','https://media.kitsu.io/anime/poster_images/25/original.jpg?1489963394','https://media.kitsu.io/anime/cover_images/25/original.jpg','5,10,20,30,1','SvBVDibOrgs','2018-04-17 19:11:18','2018-04-17 19:11:18'),(23,'Akira','Japan, 1988. An explosion caused by a young boy with psychic powers tears through the city of Tokyo and ignites the fuse that leads to World War III. In order to prevent any further destruction, he is captured and taken into custody, never to be heard from again. Now, in the year 2019, a restored version of the city known as Neo-Tokyo—an area rife with gang violence and terrorism against the current government—stands in its place. Here, Shoutarou Kaneda leads \"the Capsules,\" a group of misfits known for riding large, custom motorcycles and being in constant conflict with their rivals \"the Clowns.\"\r\n\r\nDuring one of these battles, Shoutarou\'s best friend Tetsuo Shima is caught up in an accident with an esper who finds himself in the streets of Tokyo after escaping confinement from a government institution. Through this encounter, Tetsuo begins to develop his own mysterious abilities, as the government seeks to quarantine this latest psychic in a desperate attempt to prevent him from unleashing the destructive power that could once again bring the city to its knees.\r\n\r\n(Source: MAL Rewrite)','81.2','1988-07-16','1988-07-16','Mild Nudity','movie','373','https://media.kitsu.io/anime/poster_images/29/original.jpg?1416236847','https://media.kitsu.io/anime/cover_images/29/original.jpg','5,9,28,19,1,56,2','lG2WL9brJr0','2018-04-17 19:11:18','2018-04-17 19:11:18'),(24,'Neon Genesis Evangelion: The End of Evangelion','With the final Angel vanquished, Nerv has one last enemy left to face—the humans under Seele\'s command.\r\n\r\nLeft in a deep depression nearing the end of the original series, an indecisive Shinji struggles with the ultimatum presented to him: to completely accept mankind\'s existence, or renounce humanity\'s individuality. Meanwhile, at the core of a compromised Nerv, Gendou Ikari and Rei Ayanami approach Lilith in an attempt to realize their own ideals concerning the future of the world.\r\n\r\nThe End of Evangelion serves as an alternate ending to the polarizing final episodes of Neon Genesis Evangelion. With the fate of the universe hanging in the balance, the climactic final battle draws near.\r\n\r\n(Source: MAL Rewrite)','84.17','1997-07-19','1997-07-19','Mild Nudity','movie','101','https://media.kitsu.io/anime/poster_images/23/original.png?1408440504','https://media.kitsu.io/anime/cover_images/23/original.jpg?1519178937','5,20,29,30,4','Gk72E4qgEng','2018-04-17 19:11:18','2018-04-17 19:11:18'),(25,'Blue Gender','Blue Gender takes place in the not too distant future in a world where things have gone terribly wrong for humanity. Humans have been replaced at the top of the food chain by the Blue, a race of bug-like aliens that have colonized Earth and pushed humans aside. A space station, Second Earth, has been constructed as a safe haven for humans, with the hope of one day reclaiming the Earth once more.\r\nYuji Kaido was cryogenically frozen, having been suffering from a disease known as B-Cells. Once awakened, he joins a team of soldiers that have come to Earth to extract him. Unfortunately, nothing goes according to plan as they make their way back to Second Earth.\r\nYuji will have to deal with the horrors of fighting a bloody war as he and the fighters from Second Earth look to survive. Will they be able to win back Earth without losing their humanity?','69.79','1999-10-08','2000-03-31','Mild Nudity','TV','3410','https://media.kitsu.io/anime/poster_images/39/original.jpg?1408440543','https://media.kitsu.io/anime/cover_images/39/original.jpg?1519178999','5,6,28,30,19,4,14,2','AWqlHQCaTgU','2018-04-17 19:11:18','2018-04-17 19:11:18'),(26,'.hack//Sign','Tsukasa wakes up inside The World, a massive online role-playing game full of magic and monsters, and finds himself unable to log out. With no knowledge of what\'s happening in the real world, Tsukasa must discover how he ended up stuck in the game, and what connection he has with the fabled Key of the Twilight—an item that\'s rumored to grant ultimate control over the digital realm.\r\n\r\n(Source: Funimation)','70.29','2002-04-04','2002-09-26','Teens 13 or older','TV','3205','https://media.kitsu.io/anime/poster_images/30/original.png?1475714888','https://media.kitsu.io/anime/cover_images/30/original.jpg?1519178984','5,7,8,38,11,2','fPYF8rmP6Es','2018-04-17 19:11:18','2018-04-17 19:11:18'),(27,'Chobits','When computers start to look like humans, can love remain the same?\r\nHideki Motosuwa is a young country boy who is studying hard to get into college. Coming from a poor background, he can barely afford the expenses, let alone the newest fad: Persocoms, personal computers that look exactly like human beings. One evening while walking home, he finds an abandoned Persocom. After taking her home and managing to activate her, she seems to be defective, as she can only say one word, \"Chii,\" which eventually becomes her name. Unlike other Persocoms, however, Chii cannot download information onto her hard drive, so Hideki decides to teach her about the world the old-fashioned way, while studying for his college entrance exams at the same time.\r\nAlong with his friends, Hideki tries to unravel the mystery of Chii, who may be a \"Chobit,\" an urban legend about special units that have real human emotions and thoughts, and love toward their owner. But can romance flourish between a Persocom and a human? \r\n[Written by MAL Rewrite]','74.83','2002-04-03','2002-09-25','Teens 13 or older','TV','1486','https://media.kitsu.io/anime/poster_images/40/original.jpg?1486237139','https://media.kitsu.io/anime/cover_images/40/original.jpg','3,5,4,14,25','DxsPKYq4OSc','2018-04-17 19:11:18','2018-04-17 19:11:18'),(28,'Beck','Tanaka Yukio, better known by his nickname Koyuki, is a 14-year-old who feels disconnected from life in general. Through the act of saving a mismatched dog, he meets guitarist Minami Ryuusuke, and becomes involved in Ryuusuke\'s new band BECK. Koyuki\'s life starts to change as the band struggles toward fame. ','82.47','2004-10-07','2005-03-31','17+ (violence & profanity)','TV','230','https://media.kitsu.io/anime/poster_images/38/original.jpg?1422199406','https://media.kitsu.io/anime/cover_images/38/original.jpg?1519178994','3,35,16,4','8XR5l70WsrI','2018-04-17 19:11:18','2018-04-17 19:11:18'),(29,'Rurouni Kenshin: Meiji Kenkaku Romantan','In the final years of the Bakumatsu era lived a legendary assassin known as Hitokiri Battousai. Feared as a merciless killer, he was unmatched throughout the country, but mysteriously disappeared at the peak of the Japanese Revolution. It has been ten peaceful years since then, but the very mention of Battousai still strikes terror into the hearts of war veterans.\r\nUnbeknownst to them, Battousai has abandoned his bloodstained lifestyle in an effort to repent for his sins, now living as Kenshin Himura, a wandering swordsman with a cheerful attitude and a strong will. Vowing never to kill again, Kenshin dedicates himself to protecting the weak. One day, he stumbles across Kaoru Kamiya at her kendo dojo, which is being threatened by an impostor claiming to be Battousai. After receiving help from Kenshin, Kaoru allows him to stay at the dojo, and so the former assassin temporarily ceases his travels.Rurouni Kenshin: Meiji Kenkaku Romantan tells the story of Kenshin as he strives to save those in need of saving. However, as enemies from both past and present begin to emerge, will the reformed killer be able to uphold his new ideals?\r\n[Written by MAL Rewrite]','82.98','1996-01-10','1998-09-08','Teens 13 or older','TV','194','https://media.kitsu.io/anime/poster_images/27/original.png?1408440516','https://media.kitsu.io/anime/cover_images/27/original.jpg?1519178959','3,27,32,14,1,2',NULL,'2018-04-17 19:11:18','2018-04-17 19:11:18'),(30,'Appleseed (Movie)','Growing out of the chaos of a global war, the city of Utopia is populated by humans and bioroids (artificial humans). On the surface, everything is harmonious, but tensions lurk. Into this seemingly perfect society comes a survivor of the wars, Deunan Knute, who carries a legacy that will turn out to be of critical importance to the future of humanity. \r\n(Source: ANN)','71.09','2004-04-17','2004-04-17','17+ (violence & profanity)','movie','2850','https://media.kitsu.io/anime/poster_images/35/original.jpg?1408440534','https://media.kitsu.io/anime/cover_images/35/original.jpg?1519178990','5,10,28,30,4,1','ps4iKlkc41E','2018-04-17 19:11:18','2018-04-17 19:11:18'),(31,'Kidou Tenshi Angelic Layer','12-year-old Misaki Suzuhara has just gotten involved in Angelic Layer, a battling game using electronic dolls called angels. Even as a newbie, Misaki shows advanced skills as she meets new friends and enters Angelic Layer tournaments to fight the greatest Angelic Layer champions of the nation.','72.91','2001-04-01','2001-09-23','Teens 13 or older','TV','2116','https://media.kitsu.io/anime/poster_images/33/original.jpg?1486236540','https://media.kitsu.io/anime/cover_images/33/original.jpg?1519178984','3,5,13,4','','2018-04-17 19:11:18','2018-04-17 19:11:18');
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-19 18:45:52