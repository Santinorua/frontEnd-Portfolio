import Section from './Section'
import Reveal from './Reveal'
import skills from '../data/skills'

function SkillCard({ name, Icon }) {
  return (
    <div className="group flex h-[148px] flex-col items-center justify-center gap-4 short:h-[124px] short:gap-3 tiny:h-[104px] tiny:gap-2.5 rounded-2xl border border-line/45 bg-card transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-1 hover:border-line hover:bg-card-hover">
      <Icon />
      <span className="font-mono text-[13px] text-muted transition-colors duration-200 group-hover:text-fg">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 5) * 70 + Math.floor(i / 5) * 140}>
            <SkillCard {...s} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
