import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "assignment",
      description: "This is your personal title",
      title: "Assignment",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titlePreSpan",
      description: "This is your title before the span text",
      title: "Prespan Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "span",
      description: "This is your span text in the middle of the title",
      title: "Span",
      type: "string",
    }),
    defineField({
      name: "titlePostSpan",
      description: "This is your title text after the span text",
      title: "Postspan title",
      type: "string",
    }),
    defineField({
      name: "description",
      description: "This is the description after the title",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: 'landingImage',
      title: 'Landing page image',
      description:
        'This image will be displayed at the landing page next to the title',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "span",
    },
    prepare({ title }) {
      return {
        subtitle: "Landing view",
        title,
      };
    },
  },
});
