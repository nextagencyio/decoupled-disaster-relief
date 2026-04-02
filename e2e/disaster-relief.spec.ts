import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Ready When Disaster Strikes')
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('People Helped')).toBeVisible()
    await expect(page.getByText('Active Volunteers')).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /operations/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /resources/i }).first()).toBeVisible()
  })
})

test.describe('Operations', () => {
  test('lists operations from Drupal', async ({ page }) => {
    await page.goto('/operations')
    await expect(page.locator('h1')).toContainText('Relief Operations')
    await expect(page.getByText('Hurricane Maria - Gulf Coast Response').first()).toBeVisible()
    await expect(page.getByText('Earthquake Response - Central Turkey').first()).toBeVisible()
    await expect(page.getByText('Midwest Flooding Response').first()).toBeVisible()
  })

  test('operation detail page renders content', async ({ page }) => {
    await page.goto('/operations/hurricane-maria-gulf-coast')
    await expect(page.locator('h1')).toContainText('Hurricane Maria')
    await expect(page.getByText('Active - Recovery Phase')).toBeVisible()
    await expect(page.getByText('Gulf Coast, Alabama and Mississippi')).toBeVisible()
  })
})

test.describe('Resources', () => {
  test('lists resources from Drupal', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.locator('h1')).toContainText('Resources')
    await expect(page.getByText('Family Emergency Preparedness Plan').first()).toBeVisible()
    await expect(page.getByText('Community Resilience Toolkit').first()).toBeVisible()
  })

  test('resource detail page renders content', async ({ page }) => {
    await page.goto('/resources/family-emergency-plan')
    await expect(page.locator('h1')).toContainText('Family Emergency Preparedness Plan')
    await expect(page.getByText('Families and individuals')).toBeVisible()
  })
})

test.describe('Updates', () => {
  test('lists situation updates from Drupal', async ({ page }) => {
    await page.goto('/updates')
    await expect(page.locator('h1')).toContainText('Situation Updates')
    await expect(page.getByText('Hurricane Maria Response').first()).toBeVisible()
    await expect(page.getByText('Turkey Earthquake').first()).toBeVisible()
  })

  test('update detail page renders content', async ({ page }) => {
    await page.goto('/updates/hurricane-maria-week-3')
    await expect(page.locator('h1')).toContainText('Hurricane Maria Response')
    await expect(page.getByText('High', { exact: true }).first()).toBeVisible()
  })
})

test.describe('Team', () => {
  test('lists team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1')).toContainText('Our Team')
    await expect(page.getByText('Carla Richardson', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Ahmed Khalil', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Jennifer Park', { exact: true }).first()).toBeVisible()
  })

  test('team member detail page renders content', async ({ page }) => {
    await page.goto('/team/carla-richardson')
    await expect(page.locator('h1')).toContainText('Carla Richardson')
    await expect(page.getByText('Executive Director', { exact: true }).first()).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('about page renders content', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Global Relief Partners')
    await expect(page.getByText('Our Mission').first()).toBeVisible()
  })

  test('donate page renders content', async ({ page }) => {
    await page.goto('/donate')
    await expect(page.locator('h1')).toContainText('Support Our Work')
  })
})
