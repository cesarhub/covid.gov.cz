import React from 'react';
import Link from '@/components/link';
import Button from '@/components/button';
import I18n from '@/components/i18n';

interface IProps {
  title: string;
  link: string;
  description: string;
}

const ListCard: React.FC<IProps> = ({ title, description, link }) => (
  <div className="card p-2 mb-2">
    <h2 className="font-weight-medium mb-1">{title}</h2>
    <div className="d-flex justify-content-between align-items-end">
      <p className="m-0">{description}</p>
      <div>
        <Link to={link}>
          <Button text={I18n('detail')} variant="outline" />
        </Link>
      </div>
    </div>
  </div>
);

export default ListCard;
