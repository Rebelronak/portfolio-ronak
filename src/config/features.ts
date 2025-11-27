/**
 * Feature flags for the portfolio
 * Toggle features on/off easily
 */

export const FEATURES = {
  // Set to '3d' for new 3D keyboard or 'grid' for grid view
  SKILLS_DISPLAY: 'grid' as 'grid' | '3d',
  
  // Enable/disable specific sections
  SHOW_ANIMATED_BACKGROUND: false,
  SHOW_PRELOADER: true,
  SHOW_EASTER_EGGS: true,
  
  // Other features
  ENABLE_REMOTE_CURSORS: true,
  ENABLE_ONLINE_USERS: true,
};
