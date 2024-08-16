"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import project from "@/sanity/schemas/documents/project";
import home from "@/sanity/schemas/singletons/home";
import card from "@/sanity/schemas/documents/card";
import settings from "@/sanity/schemas/singletons/settings";


const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      project,
      card,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
    singletonPlugin([home.name, settings.name]),
    unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
