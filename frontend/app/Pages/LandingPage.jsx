'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'
import HomePage from './HomePage'
import AdminPage from './AdminPage'

function LandingPage() {
    const { user } = useAuth();
  return (
    <div>
        {user?.role === 'user' ? <HomePage /> : <AdminPage />}
    </div>
  )
}

export default LandingPage