/* eslint-disable jsx-a11y/media-has-caption */
import { Text, Card, Image } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconCode, IconInfoCircle } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { useId } from 'react';
import PageBody from '../../../common/components/common/Page/PageBody';
import PageSection from '../../../common/components/common/Page/PageSection';
import { SectionTabObj } from '../../../common/components/common/StickyTabber';
import { Resources } from '../../../types/LocaleTranslation';

export default () => {
  const uId = useId();
  const { t } = useTranslation('projects');

  const tabs: SectionTabObj<Resources['projects']>[] = [
    { id: 'about', icon: <IconInfoCircle /> },
    { id: 'snip', icon: <IconCode /> },
  ];

  return (
    <PageBody id={uId} tabs={tabs as any} t={t}>
      <PageSection globalId={uId} t={t} id="about">
        <Card pb="0" withBorder>
          <Card.Section>
            <Image
              fit="contain"
              height={600}
              src="https://i.imgur.com/iJAveB3.png"
              alt="DnD Char Roll Character"
            />
          </Card.Section>
        </Card>

        <Text>{t('dcr.desc')}</Text>
      </PageSection>
      <PageSection globalId={uId} t={t} id="snip">
        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="tsx">
              {`export const CharacterContextProvider = (props: CharacterContextProviderProps) => {
    const { minAge = 1, maxAge = 60, statRoll = "4d6b3", statRange, value, children } = props;

    const [sex, setSex] = useState(value?.sex ?? (Math.round(Math.random()) as Sex));
    const [age, setAge] = useState(value?.age ?? randomInt(minAge, maxAge));
    const [background, setBackground] = useState(
        value?.background ?? backgrounds[randomInt(0, backgrounds.length - 1)]
    );

    const rollStats = useMemo(() => (input: string) => {
        // ... (rollStats implementation)
    }, [statRange]);

    const rerollStats = useMemo(() => () => setStats(rollStats(statRoll)), [statRoll, rollStats]);
    const [stats, setStats] = useState<ReturnType<typeof rollStats> | number[]>(
        () => value?.stats ?? rollStats(statRoll)
    );

    const [name, dispatchName] = useReducer(NameReducer.reducer, {
        firstName: value?.firstName ?? properNoun(gName.first()),
        lastName: value?.lastName ?? properNoun(gName.last()),
        gen: gName,
    });

    const char = useMemo(() => ({
        // ... (character object construction)
    }), [sex, age, name, stats, background]);

    const state: State = useMemo(() => ({
        sex, setSex, age, setAge, background, setBackground,
        stats, rerollStats, name, dispatchName, char,
    }), [age, background, char, name, rerollStats, sex, stats]);

    useUpdateEffect(() => {
        if (value && value !== char) {
            // ... (update logic)
        }
    }, [value]);

    return <CharacterProvider value={state}>{children}</CharacterProvider>;
};`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('dcr.snips.CharacterContextProvider')}</Text>

        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="tsx">
              {`const CharacterGenPage = () => {
    const { amount, minAge, maxAge, statRoll, advStatSettings, statsRange, characters, setCharacters, id } = useGenSettings();

    const createGenForms = useCallback((charList: typeof characters) => {
        let forms: JSX.Element[] = [];
        for (let ind = 0; ind < amount; ind++) {
            forms.push(
                <CharacterAccordionItem
                    minAge={minAge}
                    maxAge={maxAge}
                    statRoll={statRoll}
                    statRange={statsRange}
                    id={\`char\${ind}\`}
                    key={\`-\${id}-charAccord\${ind}\`}
                    index={ind}
                    value={charList[ind]}
                    onChange={(i, char) => {
                        const cA = characters;
                        if (cA[i]) {
                            cA.splice(i, 1, char);
                        } else {
                            cA.push(char);
                        }
                        setCharacters(cA);
                    }}
                />
            );
        }
        return forms;
    }, [amount, characters, maxAge, minAge, setCharacters, statRoll, statsRange, advStatSettings, id]);

    const [genForms, setGenForms] = useState(createGenForms(characters));

    useEffect(() => {
        const cA = characters;
        if (cA.length > amount - 1) {
            cA.splice(amount - 1);
            setCharacters(cA);
        }
        setGenForms(createGenForms(cA));
    }, [amount, characters, createGenForms, setCharacters, statRoll, statsRange, id]);

    return (
        <>
            <CharacterGenSettings />
            <Card css={{ backgroundColor: "transparent", padding: "0" }}>
                <Accordion type="multiple">{genForms}</Accordion>
            </Card>
        </>
    );
};`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('dcr.snips.CharacterGenPage')}</Text>

        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="tsx">
              {`const CharacterGenSettings = () => {
    const ctx = useGenSettings();
    const theme = useTheme();

    const [amount, setAmount] = useState(ctx.amount);
    const [minAge, setMinAge] = useState(ctx.minAge);
    const [maxAge, setMaxAge] = useState(ctx.maxAge);
    const [statRoll, setStatRoll] = useState(ctx.statRoll);
    const [advStatSettings, setAdvStatSettings] = useState(ctx.advStatSettings);
    const [parentAStats, setParentAStats] = useState(ctx.parentAStats);
    const [parentBStats, setParentBStats] = useState(ctx.parentBStats);

    const [characters, setCharacters] = useState(ctx.characters);
    useEffect(() => {
        if (ctx.characters !== characters)
            setCharacters(Array.from(ctx.characters));
    }, [ctx.characters, characters]);

    const Dialogs = useMemo(
        () => (
            <>
                <Dialog title="Edit 1st Parent" description={dlgDesc} key={"pEdA"}>
                    <DialogTrigger asChild>
                        <IconButton
                            disabled={!advStatSettings}
                            leftIcon={PersonIcon}
                            text={"Edit 1st Parent"}
                            key={"pEdA-btn"}
                        />
                    </DialogTrigger>
                    <ParentStatsForm
                        stats={parentAStats}
                        onChange={(v) => setParentAStats(v)}
                        key={"pSFA"}
                    />
                    <DialogClose asChild>
                        <SaveChangesBtn
                            leftIcon={CheckCircledIcon}
                            text={"Save Changes"}
                            key={"pEdA-save"}
                        />
                    </DialogClose>
                </Dialog>
                {/* Similar dialog for 2nd Parent */}
            </>
        ),
        [advStatSettings, parentAStats, parentBStats]
    );

    return (
        <>
            <Card>
                {/* Settings UI */}
            </Card>
            <Card style={{ maxWidth: "90%" }}>
                {/* CSV export UI */}
            </Card>
        </>
    );
};`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('dcr.snips.CharacterGenSettings')}</Text>
      </PageSection>
    </PageBody>
  );
};
