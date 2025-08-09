/**
 * Represents a problem in the system.
 */
export type TopicData = {
  group: string;
  href: string;
  title: string;
  files: {
    name: string;
    href: string;
  }[];
};

/**
 * Represents a topic with a title and a link.
 */
export type Topic = {
  title: string;
  href: string;
};

/**
 * Represents a collection of topics, problems, and patterns.
 */
export type Topics = {
  topics: Topic[];
  problems: TopicData[];
  patterns: TopicData[];
};
