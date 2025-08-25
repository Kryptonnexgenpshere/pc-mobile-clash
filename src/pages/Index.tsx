import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Menu, X, Trophy, Users, Calendar, Target, Award, MapPin } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import tournamentAction from '@/assets/tournament-action.jpg';
import prizeTrophy from '@/assets/prize-trophy.jpg';

const TournamentWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'overview', 'format', 'timeline', 'prizes', 'rules'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Trophy },
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'format', label: 'Format', icon: Target },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'prizes', label: 'Prizes', icon: Award },
    { id: 'rules', label: 'Rules', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                FF MAX Tournament
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border">
              <div className="grid grid-cols-2 gap-2 pt-4">
                {navigationItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-all ${
                      activeSection === id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-accent text-accent-foreground px-6 py-2 text-lg shadow-neon">
              EXCLUSIVE TOURNAMENT
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              FREE FIRE MAX
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              ESPORTS TOURNAMENT
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gold mb-2">Prize Pool</p>
                <p className="text-5xl md:text-6xl font-bold text-gold shadow-gold">₹3,00,000</p>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-20" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-secondary mb-2">Total Teams</p>
                <p className="text-5xl md:text-6xl font-bold text-secondary">24</p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              First-of-its-kind competition featuring both PC and Mobile players in an epic 7-day tournament
            </p>
            <Button 
              onClick={() => scrollToSection('overview')}
              size="lg" 
              className="bg-gradient-hero text-primary-foreground px-8 py-4 text-lg shadow-glow hover:shadow-neon transition-all duration-300"
            >
              Explore Tournament
            </Button>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section id="overview" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Tournament Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-primary/20 shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Executive Summary</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    This tournament is a unique Free Fire Max competition bringing PC + Mobile players together 
                    for the first time, ensuring fresh dynamics and highly competitive gameplay.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    With a structured group stage, intense play-ins, and an innovative Champion Rush Grand Finals 
                    format, the event guarantees thrilling matches and unforgettable moments.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The addition of a Clash Squad mode after the grand finals further amplifies excitement, 
                    providing teams and audiences with multiple ways to shine.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="border-accent/20 shadow-neon">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-accent mb-1">24</p>
                    <p className="text-sm text-muted-foreground">Total Teams</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-secondary mb-1">7</p>
                    <p className="text-sm text-muted-foreground">Days Tournament</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img
                src={tournamentAction}
                alt="Tournament Action"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Tournament Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">PC + Mobile</h4>
                <p className="text-sm text-muted-foreground">First-of-its-kind competition</p>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Champion Rush</h4>
                <p className="text-sm text-muted-foreground">Innovative grand finals format</p>
              </CardContent>
            </Card>
            <Card className="text-center border-secondary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Structured Groups</h4>
                <p className="text-sm text-muted-foreground">4 groups of 6 teams each</p>
              </CardContent>
            </Card>
            <Card className="text-center border-gold/20 hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Clash Squad</h4>
                <p className="text-sm text-muted-foreground">Additional competitive mode</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section id="format" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tournament Format
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Team Distribution */}
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Team Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-muted rounded-lg">
                  <p className="text-3xl font-bold text-foreground mb-2">24 Total Teams</p>
                  <Badge className="bg-primary text-primary-foreground">All from Partner Program</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Group A', 'Group B', 'Group C', 'Group D'].map((group) => (
                    <div key={group} className="text-center p-4 bg-card border rounded-lg">
                      <p className="font-semibold text-lg">{group}</p>
                      <p className="text-2xl font-bold text-primary">6 Teams</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Format Roadmap */}
            <Card className="border-accent/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Tournament Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <div>
                      <p className="font-semibold">Group Stage (Days 1-4)</p>
                      <p className="text-sm text-muted-foreground">Round robin format</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">2</div>
                    <div>
                      <p className="font-semibold">Play-ins (Day 5)</p>
                      <p className="text-sm text-muted-foreground">Teams #9-20 compete</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">3</div>
                    <div>
                      <p className="font-semibold">Champion Rush (Day 6)</p>
                      <p className="text-sm text-muted-foreground">Grand finals format</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-gold-foreground font-bold">4</div>
                    <div>
                      <p className="font-semibold">Clash Squad (Day 7)</p>
                      <p className="text-sm text-muted-foreground">Top 8 teams battle</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Champion Rush Format */}
          <Card className="mt-12 border-gold/20 shadow-gold">
            <CardHeader>
              <CardTitle className="text-3xl text-gold text-center flex items-center justify-center gap-2">
                <Trophy className="h-8 w-8" />
                Champion Rush Grand Finals
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg border border-gold/20">
                  <p className="text-2xl font-bold text-gold mb-2">12 Teams</p>
                  <p className="text-sm text-muted-foreground">Top 8 from Groups + Top 4 from Play-ins</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <p className="text-2xl font-bold text-primary mb-2">80 Points + Booyah</p>
                  <p className="text-sm text-muted-foreground">Win condition for championship</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <p className="text-2xl font-bold text-accent mb-2">Max 8 Matches</p>
                  <p className="text-sm text-muted-foreground">If no 80+Booyah, highest points win</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Tournament Timeline
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-7 gap-6">
            {[
              { day: 'Day 1', event: 'Group A vs B', color: 'primary' },
              { day: 'Day 2', event: 'Group B vs C', color: 'secondary' },
              { day: 'Day 3', event: 'Group C vs D', color: 'accent' },
              { day: 'Day 4', event: 'Group D vs A', color: 'primary' },
              { day: 'Day 5', event: 'Play-ins', color: 'secondary' },
              { day: 'Day 6', event: 'Champion Rush Grand Finals', color: 'gold' },
              { day: 'Day 7', event: 'Clash Squad Showdown', color: 'accent' },
            ].map((item, index) => (
              <Card key={index} className={`border-${item.color}/20 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${item.color} rounded-full flex items-center justify-center text-${item.color}-foreground font-bold text-lg mx-auto mb-4`}>
                    {index + 1}
                  </div>
                  <p className={`font-bold text-lg text-${item.color} mb-2`}>{item.day}</p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section id="prizes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Prize Pool & Honors
            </h2>
            <div className="w-24 h-1 bg-gradient-prize mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={prizeTrophy}
                alt="Prize Trophy"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent rounded-2xl" />
            </div>

            <div className="space-y-6">
              <Card className="border-gold/30 shadow-gold bg-gradient-to-br from-gold/5 to-gold/10">
                <CardContent className="p-8 text-center">
                  <Trophy className="h-16 w-16 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gold mb-2">Total Prize Pool</h3>
                  <p className="text-6xl font-bold text-gold mb-4">₹3,00,000</p>
                  <Badge className="bg-gold text-gold-foreground px-4 py-2">Biggest FF Max Tournament</Badge>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { place: 'Champion', amount: '₹1,00,000', title: 'Tournament Champion', color: 'gold' },
                  { place: 'Runner-Up', amount: '₹70,000', title: 'Finalist', color: 'primary' },
                  { place: '2nd Runner-Up', amount: '₹30,000', title: 'Podium Finisher', color: 'secondary' },
                  { place: 'MVP', amount: '₹20,000', title: 'Player of the Tournament', color: 'accent' },
                  { place: 'Clash Squad Winner', amount: '₹80,000', title: 'CS Master', color: 'gold' },
                ].map((prize) => (
                  <Card key={prize.place} className={`border-${prize.color}/20 hover:shadow-lg transition-all`}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">{prize.place}</p>
                        <p className="text-sm text-muted-foreground">{prize.title}</p>
                      </div>
                      <p className={`text-2xl font-bold text-${prize.color}`}>{prize.amount}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Maps */}
      <section id="rules" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Rules & Maps
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Point System */}
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Trophy className="h-6 w-6" />
                  Point System (Battle Royale)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-accent">Placement Points</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      ['1st', '12 pts'], ['2nd', '9 pts'], ['3rd', '8 pts'], ['4th', '7 pts'],
                      ['5th', '6 pts'], ['6th', '5 pts'], ['7th', '4 pts'], ['8th', '3 pts'],
                      ['9th', '2 pts'], ['10th', '1 pt'], ['11th-12th', '0 pts']
                    ].map(([place, points]) => (
                      <div key={place} className="flex justify-between p-2 bg-muted rounded">
                        <span>{place}</span>
                        <span className="font-semibold text-primary">{points}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 text-accent">Kill Points & Tie-breakers</h4>
                  <div className="space-y-2 text-sm">
                    <p className="p-2 bg-accent/10 rounded">Kill Points: 1 kill = 1 point</p>
                    <p className="font-semibold">Tie-breakers:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li>Number of Booyahs</li>
                      <li>Total Kills</li>
                      <li>Placement in Last Match</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Schedule */}
            <Card className="border-accent/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Map Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-primary">Battle Royale Maps</h4>
                  <p className="text-sm text-muted-foreground mb-3">6 matches per day</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Bermuda', 'Purgatory', 'Kalahari', 'Alpine', 'Nexterra', 'Solara'].map((map) => (
                      <Badge key={map} variant="outline" className="justify-center p-2">
                        {map}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 text-secondary">Clash Squad Maps</h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <p className="font-semibold">Best of 1 → Bermuda</p>
                    </div>
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <p className="font-semibold">Best of 3 → Bermuda, Purgatory, Kalahari</p>
                    </div>
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <p className="font-semibold">Best of 5 → Bermuda, Purgatory, Kalahari, Alpine, Nexterra</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clash Squad Format */}
          <Card className="mt-12 border-gold/20 shadow-gold">
            <CardHeader>
              <CardTitle className="text-3xl text-gold text-center flex items-center justify-center gap-2">
                <Award className="h-8 w-8" />
                Clash Squad Format - Final Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg border border-gold/20">
                  <h4 className="text-2xl font-bold text-gold mb-3">Quarterfinals</h4>
                  <p className="text-lg">Best of 1</p>
                  <p className="text-sm text-muted-foreground">(4 matches)</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <h4 className="text-2xl font-bold text-primary mb-3">Semifinals</h4>
                  <p className="text-lg">Best of 3</p>
                  <p className="text-sm text-muted-foreground">(2 matches)</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <h4 className="text-2xl font-bold text-accent mb-3">Finals</h4>
                  <p className="text-lg">Best of 5</p>
                  <p className="text-sm text-muted-foreground">(1 match)</p>
                </div>
              </div>
              <div className="text-center mt-6 p-6 bg-gold/5 rounded-lg border border-gold/20">
                <p className="text-lg">
                  <span className="font-bold text-gold">Top 8 teams</span> from the Grand Finals compete for 
                  <span className="font-bold text-gold"> Clash Squad supremacy</span> and 
                  <span className="font-bold text-gold"> ₹80,000 prize</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Trophy className="h-8 w-8 text-gold" />
              <span className="text-3xl font-bold text-gold">FF MAX Tournament</span>
            </div>
            <p className="text-xl mb-4">Free Fire Max Esports Tournament</p>
            <p className="text-lg text-background/70 mb-6">Prize Pool: ₹3,00,000 | 24 Teams | 7 Days</p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-bold text-lg mb-2 text-gold">Tournament Dates</h4>
                <p className="text-background/70">TBD - Stay Tuned</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gold">Platform</h4>
                <p className="text-background/70">PC + Mobile Players</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gold">Registration</h4>
                <p className="text-background/70">Partner Program Only</p>
              </div>
            </div>
            <Separator className="my-8 bg-background/20" />
            <p className="text-sm text-background/50">
              © 2024 FF MAX Tournament. All rights reserved. | First-of-its-kind PC + Mobile Competition
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TournamentWebsite;