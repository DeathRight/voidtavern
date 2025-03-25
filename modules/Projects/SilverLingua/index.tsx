/* eslint-disable jsx-a11y/media-has-caption */
import { Text, Card, Highlight, Box } from '@mantine/core';
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
        <Card withBorder p="sm">
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Box pr="md">
              <IconInfoCircle />
            </Box>
            <Text>{t('silverlingua.info')}</Text>
          </Box>
        </Card>

        <Highlight
          highlight={[
            t('silverlingua.highlights.token-aware'),
            t('silverlingua.highlights.biological architecture'),
            t('silverlingua.highlights.provider agnostic'),
            t('silverlingua.highlights.extensible'),
            t('silverlingua.highlights.type-safe'),
          ]}
          highlightStyles={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.info[3] : theme.colors.info[6],
            backgroundColor: 'transparent',
            fontWeight: 'bolder',
          })}
        >
          {t('silverlingua.desc')}
        </Highlight>
      </PageSection>
      <PageSection globalId={uId} t={t} id="snip">
        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="python">
              {`class SummarizingIdearium(Idearium):
    """
    An extension of Idearium that summarizes older messages instead of removing them.
    
    This implementation uses a summarization model to condense older messages
    while preserving their essential information.
    """
    
    def __init__(
        self,
        tokenizer: Tokenizer,
        max_tokens: int,
        summarization_model: Optional[any] = None,
        summarization_threshold: int = 5,
        **kwargs
    ):
        super().__init__(tokenizer=tokenizer, max_tokens=max_tokens, **kwargs)
        self.summarization_model = summarization_model
        self.summarization_threshold = summarization_threshold
        self.summary_indices = set()
    
    def _trim(self):
        """Trim strategy that summarizes chunks of messages instead of removing them."""
        if self.total_tokens <= self.max_tokens:
            return
            
        # Find chunks of consecutive non-persistent messages to summarize
        current_chunk = []
        chunks = []
        
        for i, notion in enumerate(self.notions):
            # Skip persistent notions and notions already in summaries
            if notion.persistent or i in self.summary_indices:
                if current_chunk and len(current_chunk) >= self.summarization_threshold:
                    chunks.append(current_chunk)
                current_chunk = []
                continue
                
            current_chunk.append((i, notion))
        
        # Replace oldest chunks with summaries until under token limit
        for chunk in chunks:
            if self.total_tokens <= self.max_tokens:
                break
                
            # Extract indices and notions
            indices = [i for i, _ in chunk]
            notions = [n for _, n in chunk]
            
            # Create summary
            summary = self._summarize_notions(notions)
            
            # Only apply if we save tokens
            if summary_tokens < original_tokens:
                # Replace the first notion with the summary
                first_idx = indices[0]
                self.notions[first_idx] = summary
                self.tokenized_notions[first_idx] = self.tokenizer.encode(summary.content)
                
                # Remove the rest and update indices
                # ...`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('silverlingua.snips.SummarizingIdearium')}</Text>

        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="python">
              {`class OpenAIChatAgent(Agent):
    """
    An agent that uses the OpenAI chat completion API.
    """

    model: OpenAIModel

    @property
    def model(self) -> OpenAIModel:
        return self._model

    def _bind_tools(self) -> None:
        m_tools: List[ChatCompletionToolParam] = [
            {"type": "function", "function": tool.description} for tool in self.tools
        ]

        # Check to make sure m_tools is not empty
        if len(m_tools) > 0:
            self.model.completion_params.tools = m_tools

    def __init__(
        self,
        model_name: OpenAIChatModelName = "gpt-3.5-turbo",
        idearium: Optional[Idearium] = None,
        tools: Optional[List[Tool]] = None,
        api_key: Optional[str] = None,
        completion_params: Optional[CompletionParams] = None,
    ):
        """
        Initializes the OpenAI chat agent.
        """
        model = OpenAIModel(
            name=model_name, api_key=api_key, completion_params=completion_params
        )

        args = {"model": model}
        if idearium is not None:
            args["idearium"] = idearium
        if tools is not None:
            args["tools"] = tools

        super().__init__(**args)`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('silverlingua.snips.OpenAIChatAgent')}</Text>

        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="python">
              {`class AnthropicChatAgent(Agent):
    """
    An agent that uses the Anthropic chat completion API.
    """

    model: AnthropicModel

    @property
    def model(self) -> AnthropicModel:
        return self._model

    def _bind_tools(self) -> None:
        """Bind tools to the model."""
        if not self.tools:
            return

        tools = []
        for tool in self.tools:
            tools.append(
                {
                    "name": tool.description.name,
                    "description": tool.description.description,
                    "input_schema": {
                        "type": "object",
                        "properties": {
                            name: {
                                "type": param.type,
                                "description": param.description or "",
                            }
                            for name, param in tool.description.parameters.properties.items()
                        },
                        "required": tool.description.parameters.required or [],
                    },
                }
            )

        if tools:
            self.model.completion_params.tools = tools`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('silverlingua.snips.AnthropicChatAgent')}</Text>

        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="python">
              {`# Create a simple tool that works with both providers
@tool
def search_database(query: str) -> str:
    """
    Search a database for information.
    
    Args:
        query: The search query
    
    Returns:
        The search results
    """
    # In a real implementation, this would query a database
    return f"Database results for '{query}': Found 3 matching entries."

# OpenAI implementation
openai_agent = OpenAIChatAgent(
    model_name="gpt-3.5-turbo",
    tools=[search_database],
    api_key=os.environ.get("OPENAI_API_KEY")
)

# Anthropic implementation with the same tool
anthropic_agent = AnthropicChatAgent(
    model_name="claude-3-haiku",
    tools=[search_database],
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)

# Same query works seamlessly across providers
openai_response = openai_agent.generate("Search for recent climate studies")
anthropic_response = anthropic_agent.generate("Search for recent climate studies")`}
            </Prism>
          </Card.Section>
        </Card>
        <Text style={{ whiteSpace: 'pre-wrap' }}>{t('silverlingua.snips.ProviderAgnosticUsage')}</Text>
      </PageSection>
    </PageBody>
  );
}; 